import {
  ActionPostResponse,
  createPostResponse,
  ActionGetResponse,
  ActionPostRequest,
  createActionHeaders,
} from "@solana/actions";
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { DEFAULT_SOL_ADDRESS, DEFAULT_SOL_AMOUNT } from "./const";

const headers = createActionHeaders();

export const GET = async (req: Request) => {
  try {
    const requestUrl = new URL(req.url);
    const { index, toPubkey } = validatedQueryParams(requestUrl);

    const baseHref = new URL(
      `/api/actions/transfer-sol?to=${index}`,
      requestUrl.origin,
    ).toString();



    const payload: ActionGetResponse = {
      type: "action",
      title: "Swaad Restaurant",
      icon: new URL(`/${toPubkey}.jpg`, requestUrl.origin).toString(),
      description: "Show your appreciation by tipping your favorite waiters directly to their crypto wallets.",
      label: "Transfer",
      links: {
        actions: [
          {
            label: "Send 0.001 SOL",
            href: `${baseHref}&amount=${"0.001"}`,
          },
          {
            label: "Send 0.002 SOL",
            href: `${baseHref}&amount=${"0.002"}`,
          },
          {
            label: "Send 0.005 SOL",
            href: `${baseHref}&amount=${"0.005"}`,
          },
          {
            label: "Send SOL",
            href: `${baseHref}&amount={amount}`,
            parameters: [
              {
                name: "amount",
                label: "Enter the amount of SOL to send",
                required: true,
              },
            ],
          },
        ],
      },
    };

    return Response.json(payload, {
      headers,
    });
  } catch (err) {
    console.log(err);
    let message = "An unknown error occurred";
    if (typeof err == "string") message = err;
    return new Response(message, {
      status: 400,
      headers,
    });
  }
};


export const OPTIONS = async (req: Request) => {
  return new Response(null, { headers });
};

export const POST = async (req: Request) => {
  try {
    const requestUrl = new URL(req.url);
    const { amount, toPubkey } = validatedQueryParams(requestUrl);

    const body: ActionPostRequest = await req.json();


    let account: PublicKey;
    try {
      account = new PublicKey(body.account);
    } catch (err) {
      return new Response('Invalid "account" provided', {
        status: 400,
        headers,
      });
    }

    const connection = new Connection(
      process.env.SOLANA_RPC! || clusterApiUrl("devnet"),
    );

    const minimumBalance = await connection.getMinimumBalanceForRentExemption(
      0,
    );
    if (amount * LAMPORTS_PER_SOL < minimumBalance) {
      throw `account may not be rent exempt: ${toPubkey.toBase58()}`;
    }

    const transferSolInstruction = SystemProgram.transfer({
      fromPubkey: account,
      toPubkey: toPubkey,
      lamports: amount * LAMPORTS_PER_SOL,
    });

    const { blockhash, lastValidBlockHeight } =
      await connection.getLatestBlockhash();

    const transaction = new Transaction({
      feePayer: account,
      blockhash,
      lastValidBlockHeight,
    }).add(transferSolInstruction);


    const payload: ActionPostResponse = await createPostResponse({
      fields: {
        transaction,
        message: `Send ${amount} SOL to ${toPubkey.toBase58()}`,
      },
    });

    return Response.json(payload, {
      headers,
    });
  } catch (err) {
    console.log(err);
    let message = "An unknown error occurred";
    if (typeof err == "string") message = err;
    return new Response(message, {
      status: 400,
      headers,
    });
  }
};

function validatedQueryParams(requestUrl: URL) {
  let toPubkey: PublicKey = DEFAULT_SOL_ADDRESS;
  let amount: number = DEFAULT_SOL_AMOUNT;
  const index = parseInt(requestUrl.searchParams.get("to") as string);
  try {
    if (requestUrl.searchParams.get("to")) {
      const array = [
        "DBRrtgx9THaDP94kDo7vDc5q8ei6LTh52vMBdB6YEpgM",
        "HA4y2LT19RJhQJfM8wRMNbiUzDC7iFtYf4M43ZjvqZYD",
        "2jCZccY7k2ZTBh8nb36rx7vviz4a68pwYJfFJzCTMqs5",
        "CaZ6ZjKWqCN2UasNrrbTonogwEGvttrBWqKwgKWXgnqG"
      ];


      if (isNaN(index) || index < 0 || index >= array.length) {
        throw new Error("Invalid 'to' parameter value.");
      }

      toPubkey = new PublicKey(array[index]);
      console.log(requestUrl.searchParams.get("to"), toPubkey.toString());
    } else {
      throw new Error("Provide 'to' parameter.");
    }
  } catch (error) {
    console.error(error);
  }
  try {
    if (requestUrl.searchParams.get("amount")) {
      amount = parseFloat(requestUrl.searchParams.get("amount")!);
    }

    if (amount <= 0) throw "amount is too small";
  } catch (err) {
    throw "Invalid input query parameter: amount";
  }

  return {
    amount,
    toPubkey,
    index
  };
}

