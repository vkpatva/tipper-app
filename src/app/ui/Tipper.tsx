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
                src="https://cdn.gencraft.com/prod/user/e3b1d056-a391-4365-acd5-45c7d2f69279/c1ce15c9-1a9d-4dce-9007-240d189e5a6f/image/image1_0.jpg?Expires=1725121402&Signature=JI5S0V9ZZHrzsaRUGVwHxn7gWNk7-SMEMirEKnK46xLlPXuqxK3z64NNlQ9lca2lEVRVb4DuQxGN0EH5gUzxmI50AjTfXYaMseNLKOqlMVxuKQro0bCqZjC4ArtOdfbkn3gJgpsMB4gZjjb7VHZPwTaWnLs08Ra6fLdBvXjJw-ext2mjmChCjNHexgjOIftA4A5UyuptKQsBFXY6bQIxSqZ1Rsq1NZAwecMzvMu3pJmRS2gI-QQzQ1A-fhgcaGYoIDAtyd5kRrw6UPFcTuEvTIirMI367xQ~ubp1jQggOcMnBqXBuPK0EvZZvzSG8var6vwzytvYdUKqoYgn6Xyclg__&Key-Pair-Id=K3RDDB1TZ8BHT8"
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
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Tip Rajesh
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[300px]">
            <a href="#" className="w-full md:w-auto  lg:min-w-[300px]">
              <img
                className="object-cover w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="https://cdn.gencraft.com/prod/user/e3b1d056-a391-4365-acd5-45c7d2f69279/6746e3b7-e720-4840-95e1-7a0713608e4d/image/image1_0.jpg?Expires=1725121477&Signature=biuMolLE0CDRrl-U8isU4ejTiwHhjLD-a84lTOjRoaZKyEIhO0D~fp4KWTreuz-6r20ivVCqYXYqmphajboSNWWEQodIzvZ7wlRnEhutmsF90RsY9WqkMpyjztfQ-2ah8p7s0Vc19vTW3ruoyQ53JvjQjrw1zbuFVyO4SGVjdXtWkUQ-Nbz0h0SlIZLlafLbztm6-P4YXcdpdIpstKMIJMvICHzAtOrnZrpaiB6IRhC-MK~ntPjq0hM60U2OHfwHvC2Cgx7hKktHQVMucXOuu5czE5~XDa9ji0UCcp8zNOETns0JneQfkjKXQkoQBOxKE5DOqttkqSNYrdddhUi4eA__&Key-Pair-Id=K3RDDB1TZ8BHT8"
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
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link
                  href={
                    "https://dial.to/?action=solana-action%3Ahttp%3A%2F%2Flocalhost%3A3000%2Fapi%2Factions%2Ftransfer-sol%3Fto%3D0%26amount%3D1&cluster=devnet"
                  }
                >
                  Tip Priya
                </Link>
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[300px]">
            <a href="#" className="w-full md:w-auto  lg:min-w-[300px]">
              <img
                className="object-cover w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="https://cdn.gencraft.com/prod/user/e3b1d056-a391-4365-acd5-45c7d2f69279/6746e3b7-e720-4840-95e1-7a0713608e4d/image/image0_0.jpg?Expires=1725121477&Signature=WYzhuYvTylFl4v033DUZkGJCOD4qe791J3VPQnZw4TxQJbAZksCa5kOjVqiSxDaopPa9ClbyKbbRpuveF7sc8Vug3MsioMA0H8P3lie-NYx4JW-iZgI3cpS9BD0FQX20fzrTWcM3HpdScYsDCnk5GjJQtu8hLUV6p0WbIBwGRi5zxA7MWDJXdNx8beddHEzkNaV1KbyGbgWPTXglwI4z6b-TIXGaoL8c7Pre6Eol31pSxyfjfCyuPuLxU0I~2wmZLUjefcDe6xB5ndaoV6~aHgibxHq2jsp0hnFg~kCUaOqBBrwWmG83ZZEYv6fr3m2xut73UTC9A6xaElGmBasnqw__&Key-Pair-Id=K3RDDB1TZ8BHT8"
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
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Tip Neha
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[300px]">
            <a href="#" className="w-full md:w-auto  lg:min-w-[300px]">
              <img
                className="object-cover w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="https://cdn.gencraft.com/prod/user/e3b1d056-a391-4365-acd5-45c7d2f69279/c1ce15c9-1a9d-4dce-9007-240d189e5a6f/image/image0_0.jpg?Expires=1725121402&Signature=bxRbyhcx8m3lQipDiJi7mX2MD6GRx0dCvd2m5ClARkbVJZxyNjuIyazhU7Wy3b28loBV24gKxrFsgEBBk4tnHhL6CZU425cYnjubayp7o2YE1IJykx5dKS79V1f2tAzdLGE-dS8pK6Q~5X8MBI-KE6F1BWCvcAynKlgWchkFkZP3wdmHrShOUPN0aFdIOhD38u9e-2m17OCvSgxwEpAea19S2gQIh3KRkg324jo0bGgrXgb4LYknmM2XTHHaCtN-iXa-2xQwo5sZcFS2ExHRKyprc~Wwzk526NrI51LT8BI0fk9B0-04gjBnYN2Ba0xa9ZxwxU6p5KHETFFypIgACg__&Key-Pair-Id=K3RDDB1TZ8BHT8"
                alt="Amit Patel"
              />
            </a>
            <div className="px-5 py-4 md:py-0">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Amit Patel</a>
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400 mb-4 lg:min-h-[180px]">
                Amit is an experienced waiter at Swaad Restaurant, renowned for
                his efficiency and courteous nature.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Tip Amit
              </button>
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
