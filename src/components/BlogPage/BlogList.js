import React from 'react';
import BlogItem from './BlogItem';
const BlogList = ({ blogs }) => {
    return (
      <div className='blogList-wrap' style={{paddingTop: '20ox',paddingBottom:'50px', paddingLeft: '20px', paddingRight: '20px'}}>
        {blogs.map((blog) => (
          <BlogItem blog={blog} />
        ))}
      </div>
    );
  };

export default BlogList;
