import React from 'react';
const BlogItem = (props) => {
    return (
        <li>
            <h2 id={props.id}>{props.title}</h2>
            <p>{props.blogText} </p>
        </li>
    )
  }
  export default BlogItem;