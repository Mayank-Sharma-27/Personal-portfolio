import React from "react";

import styles from "./Blogs.module.css";

import blogs from "../../data/blogs.json";
import { BlogCard } from "./BlogCard";

export const Blogs = () => {
  return (
    <section className={styles.container} id="blogs">
      <h2 className={styles.title}>Blogs</h2>
      <div className={styles.blogs}>
        {blogs.map((blog, id) => {
          return <BlogCard key={id} blog={blog} />;
        })}
      </div>
    </section>
  );
};