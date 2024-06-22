import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BlogCard.module.css";
import { getImageUrl } from "../../utils";

export const BlogCard = ({
  blog: { id, title, imageSrc, description, source },
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/blogs/${id}`); // Navigate to BlogPost page, passing the blog's id
  };

  return (
    <div className={styles.container} onClick={handleCardClick}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
