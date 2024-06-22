import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import "./BlogPost.css"; // Import the CSS file

export const BlogPost = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching content for blog:", id);
    fetch(`/blogs/${id}.md`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        console.log("Fetched content:", text);
        setContent(text);
      })
      .catch((err) => {
        console.error("Error fetching markdown file:", err);
        setError(err.message);
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="blog-post">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};
