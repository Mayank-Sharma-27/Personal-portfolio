import React from 'react'
import BlogItem from '../components/BlogItem'
import { BlogList } from '../helpers/BlogList'

import "../styles/Blogs.css";

function Blogs() {
  return  (
    <div className='blogs'>
      <h1>Blogs Written by me</h1>
      <div className='blogList'>
        {BlogList.map((blog) => {
          return (
            <BlogItem image={blog.image} name={blog.name} url={blog.url} />
          );
        }
        )}
      </div>

    </div>
  )
}

export default Blogs


