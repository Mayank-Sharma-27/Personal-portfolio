import React from "react";
import styles from "./MediumCard.module.css"; // Make sure to create this CSS module
import DOMPurify from "dompurify";
import moment from "moment";

export const MediumCard = ({ article }) => {
  const sanitizedDescription = DOMPurify.sanitize(article.description);
  const descriptionText = sanitizedDescription
    .replace(/<figcaption>.*<\/figcaption>/gi, "")
    .replace(/<[^>]+>/g, "");

  return (
    <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800">
      <div>
        <img className="rounded-t-lg" src={article.thumbnail} alt />
      </div>
      <div className="p-5">
        <a href={article.link}>
          <h5 className="mb-2 text-xl lg:text-2xl 2xl:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {article.title}
          </h5>
        </a>
        <p
          className="mb-3 font-normal text-gray-700 dark:text-gray-400"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          dangerouslySetInnerHTML={{ __html: descriptionText }}
        />
        <p className="text-cyan-600">
          {moment(article.pubDate).format("MMMM Do YYYY")}
        </p>
      </div>
    </div>
  );
};
