import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BlogItem({image,name, url}) {
  const navigate = useNavigate();  
  return (
    <div
      className="blogItem"
      onClick={() => {
        window.location.href = url;

      }}
      >
        <div style={{backgroundImage: `url(${image})`}} className="bgImage"></div>
        <h1> {name}</h1>
    </div>
  )
}
