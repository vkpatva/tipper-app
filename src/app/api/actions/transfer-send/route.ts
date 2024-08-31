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
  PublicKey,
  Transaction,
} from "@solana/web3.js";
import { DEFAULT_SOL_ADDRESS, DEFAULT_SPL_AMOUNT, SOLANA_MAINNET_SEND_PUBKEY } from "./const";
import * as splToken from "@solana/spl-token";
const headers = createActionHeaders();

export const GET = async (req: Request) => {
  try {
    const requestUrl = new URL(req.url);
    const { index, toPubkey } = validatedQueryParams(requestUrl);

    const baseHref = new URL(
      `/api/actions/transfer-send?to=${index}`,
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
            label: "1 $SEND",
            href: `${baseHref}&amount=${"1"}`,
          },
          {
            label: "2 $SEND",
            href: `${baseHref}&amount=${"2"}`,
          },
          {
            label: "5 $SEND",
            href: `${baseHref}&amount=${"5"}`,
          },
          {
            label: "$SEND",
            href: `${baseHref}&amount={amount}`,
            parameters: [
              {
                name: "amount",
                label: "Enter the amount of $SEND to send",
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
    console.log(amount, toPubkey)

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


    const decimals = 6;
    const mintAddress = new PublicKey(SOLANA_MAINNET_SEND_PUBKEY);
    let transferAmount: any = parseFloat(amount.toString());
    transferAmount = transferAmount.toFixed(decimals);
    transferAmount = transferAmount * Math.pow(10, decimals);

    const fromTokenAccount = await splToken.getAssociatedTokenAddress(
      mintAddress,
      account,
      false,
      splToken.TOKEN_PROGRAM_ID,
      splToken.ASSOCIATED_TOKEN_PROGRAM_ID,
    );

    let toTokenAccount = await splToken.getAssociatedTokenAddress(
      mintAddress,
      toPubkey,
      true,
      splToken.TOKEN_PROGRAM_ID,
      splToken.ASSOCIATED_TOKEN_PROGRAM_ID,
    );
    const ifexists = await connection.getAccountInfo(toTokenAccount);

    let instructions = [];

    if (!ifexists || !ifexists.data) {
      let createATAiX = splToken.createAssociatedTokenAccountInstruction(
        account,
        toTokenAccount,
        toPubkey,
        mintAddress,
        splToken.TOKEN_PROGRAM_ID,
        splToken.ASSOCIATED_TOKEN_PROGRAM_ID,
      );
      instructions.push(createATAiX);
    }

    console.log({
      fromTokenAccount: fromTokenAccount,
      toTokenAccount: toTokenAccount,
      account: account,
      transferAmount: transferAmount
    })

    let transferInstruction = splToken.createTransferInstruction(
      fromTokenAccount,
      toTokenAccount,
      account,
      transferAmount,
    );
    instructions.push(transferInstruction);

    const transaction = new Transaction();
    transaction.feePayer = account;

    transaction.add(...instructions);

    transaction.feePayer = account;

    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;


    const payload: ActionPostResponse = await createPostResponse({
      fields: {
        transaction,
        message: `Send ${amount} $SEND to ${toPubkey.toBase58()}`,
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
  let amount: number = DEFAULT_SPL_AMOUNT;
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

