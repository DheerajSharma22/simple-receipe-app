"use client";
import React, { useEffect, useState } from "react";
import ReceipeList from "./components/ReceipeList";
import Loading from "./loading";

const Home = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [receipeList, setReciepeList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReceipes = async (pageNo) => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://dummyjson.com/recipes?limit=${15}&skip=${pageNo * 10 - 10}`
        );
        const data = await res.json();

        if (data) {
          setTotalPages(Math.floor(data?.total / 15));
          setReciepeList(data?.recipes);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchReceipes(page);
  }, [page]);

  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      {/* Header part */}
      <div className="w-11/12 mx-auto">
        <div className="w-full text-center my-5">
          <h1 className="text-4xl font-bold mb-1">Receipes</h1>
          <p className="text-lg font-semibold text-gray-600">
            Get your favourite receipes here.
          </p>
        </div>

        {loading ? <Loading /> : <ReceipeList receipeList={receipeList} />}

        <div className="w-full py-5 mt-8 px-5 flex items-center justify-between">
          {page > 1 && (
            <button
              className="bg-red-500 text-white rounded-md px-6 py-2"
              onClick={() => setPage(page - 1)}
            >
              Prev
            </button>
          )}
          <p className="text-xl font-semibold">
            Page {page} of {totalPages}
          </p>
          {page < totalPages && (
            <button
              className="bg-red-500 text-white rounded-md px-6 py-2"
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
