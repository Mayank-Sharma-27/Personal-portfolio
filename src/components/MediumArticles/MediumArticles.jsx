import React, { useState, useEffect } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import styles from "./MediumArticles.module.css"; // Make sure you have this CSS module
import { MediumCard } from "./MediumCard"; // Adjust the path based on your project structure

export const MediumArticles = () => {
  const [mediumData, setMediumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mayank.sharma2796"
    )
      .then((res) => res.json())
      .then((response) => {
        setMediumData(response.items);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <p>Fetching data from Medium...</p>}
      {error && <p>There was an error fetching the data: {error.message}</p>}
      {!isLoading && !error && (
        <>
          <div className="pb-10 flex justify-center">
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-4">
              {mediumData.slice(0, 9).map((article) => (
                <MediumCard article={article} />
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <a
              href="https://medium.com/@mayank.sharma2796/"
              className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              View All <HiOutlineArrowNarrowRight className="ml-2" size={20} />
            </a>
          </div>
        </>
      )}
    </>
  );
};
