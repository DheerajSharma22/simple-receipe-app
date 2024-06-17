
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReceipeList = ({ receipeList }) => {
  return (
    <div className="w-full">
      {/* Showing lists of receips */}
      {receipeList && receipeList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {receipeList?.map((receipe) => (
            <div
              key={receipe?.id}
              className="p-5 rounded-md shadow-lg transition-all duration-200 bg-red-50"
            >
              <div>
                <Image
                  src={receipe.image}
                  alt={receipe.name}
                  width={500}
                  height={500}
                  className="w-full h-full"
                />
              </div>

              <div className="flex flex-col gap-3 mt-5">
                <p className="font-bold text-xl">{receipe.name}</p>
                <div className="flex items-center justify-between w-full">
                  <p className="font-semibold">{receipe.rating}</p>
                  <p className="font-semibold">{receipe.cuisine}</p>
                </div>
                <Link
                  href={`/receipe/${receipe?.id}`}
                  className="px-6 py-2 bg-red-500 rounded-md text-white self-start hover:bg-red-400"
                >
                  Get Receipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-10 text-xl font-semibold">
          Receipes not found.
        </p>
      )}
    </div>
  );
};

export default ReceipeList;
