import React from 'react';
import BlogItem from './blog-item';
import postsData from '../../postData.js';
const BlogList = (props) => {
    return (
        <ul>
            {
                postsData.map((listItem) => {
                return <BlogItem key={listItem.id} title={listItem.title} blogText={listItem.body} />
            })
            }
        </ul>
    )
  }

  export default BlogList;
