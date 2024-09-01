import Link from "next/link";
import React from "react";

const Tipper = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Swaad Restaurant
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Show your appreciation by tipping your favorite waiters directly to
            their crypto wallets.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1 lg:grid-cols-2 ">
          <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[300px]">
            <a href="#" className="w-full md:w-auto lg:min-w-[300px]">
              <img
                className="object-cover w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="/CaZ6ZjKWqCN2UasNrrbTonogwEGvttrBWqKwgKWXgnqG.jpg"
                alt="Rajesh Kumar"
              />
            </a>
            <div className="px-5 py-4 md:py-0">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Rajesh Kumar</a>
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400 mb-4 lg:min-h-[180px]">
                Rajesh is a skilled waiter at Swaad Restaurant, celebrated for
                his quick service and friendly demeanor.
              </p>
              <div className="flex gap-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link
                    href={
                      "https://dial.to/?action=solana-action%3Ahttps%3A%2F%2Ftipper-app.vercel.app%2Fapi%2Factions%2Ftransfer-sol%3Fto%3D3%26amount%3D5&cluster=devnet"
                    }
                  >
                    Tip SOL
                  </Link>
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link
                    href={
                      "https://dial.to/?action=solana-action%3Ahttps%3A%2F%2Ftipper-app.vercel.app%2Fapi%2Factions%2Ftransfer-send%3Fto%3D3%26amount%3D5&cluster=mainnet"
                    }
                  >
                    Tip $SEND
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[300px]">
            <a href="#" className="w-full md:w-auto  lg:min-w-[300px]">
              <img
                className="object-cover w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="/EQhsdAx9LYe1HLJgsF9i3GeTYnX7AXzA4nNpFFBcRaJt.jpg"
                alt="Priya Sharma"
              />
            </a>
            <div className="px-5 py-4 md:py-0">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Priya Sharma</a>
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400 mb-4 lg:min-h-[180px]">
                Priya is a dedicated server at Swaad Restaurant, known for her
                exceptional customer service and warm smile.
              </p>
              <div className="flex gap-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link
                    href={
                      "https://dial.to/?action=solana-action%3Ahttps%3A%2F%2Ftipper-app.vercel.app%2Fapi%2Factions%2Ftransfer-sol%3Fto%3D0%26amount%3D5&cluster=devnet"
                    }
                  >
                    Tip SOL
                  </Link>
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link
                    href={
                      "https://dial.to/?action=solana-action%3Ahttps%3A%2F%2Ftipper-app.vercel.app%2Fapi%2Factions%2Ftransfer-send%3Fto%3D0%26amount%3D5&cluster=devnet"
                    }
                  >
                    Tip $SEND
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[300px]">
            <a href="#" className="w-full md:w-auto  lg:min-w-[300px]">
              <img
                className="object-cover w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="/HA4y2LT19RJhQJfM8wRMNbiUzDC7iFtYf4M43ZjvqZYD.jpg"
                alt="Neha Reddy"
              />
            </a>
            <div className="px-5 py-4 md:py-0">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Neha Reddy</a>
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400 mb-4 lg:min-h-[180px]">
                Neha is a valued server at Swaad Restaurant, appreciated for her
                attentive service and positive attitude.
              </p>
              <div className="flex gap-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link
                    href={
                      "https://dial.to/?action=solana-action%3Ahttps%3A%2F%2Ftipper-app.vercel.app%2Fapi%2Factions%2Ftransfer-sol%3Fto%3D1%26amount%3D5&cluster=devnet"
                    }
                  >
                    Tip SOL
                  </Link>
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link
                    href={
                      "https://dial.to/?action=solana-action%3Ahttps%3A%2F%2Ftipper-app.vercel.app%2Fapi%2Factions%2Ftransfer-send%3Fto%3D1%26amount%3D5&cluster=mainnet"
                    }
                  >
                    Tip $SEND
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[300px]">
            <a href="#" className="w-full md:w-auto  lg:min-w-[300px]">
              <img
                className="object-cover w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="/2jCZccY7k2ZTBh8nb36rx7vviz4a68pwYJfFJzCTMqs5.jpg"
                alt="Amit Patel"
              />
            </a>
            <div className="px-5 py-4 md:py-0">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Amit Patel</a>
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400 mb-4 lg:min-h-[180px]">
                Amit is a hardworking server at Swaad Restaurant, well-known for
                his efficiency and professional attitude.
              </p>
              <div className="flex gap-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link
                    href={
                      "https://dial.to/?action=solana-action%3Ahttps%3A%2F%2Ftipper-app.vercel.app%2Fapi%2Factions%2Ftransfer-sol%3Fto%3D2%26amount%3D5&cluster=devnet"
                    }
                  >
                    Tip SOL
                  </Link>
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link
                    href={
                      "https://dial.to/?action=solana-action%3Ahttps%3A%2F%2Ftipper-app.vercel.app%2Fapi%2Factions%2Ftransfer-send%3Fto%3D2%26amount%3D5&cluster=mainnet"
                    }
                  >
                    Tip $SEND
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl text-center">
          <span className="text-sm text-gray-500 text-center dark:text-gray-400">
            Powered by Tipper
          </span>
        </div>
      </div>
    </section>
  );
};

export default Tipper;
