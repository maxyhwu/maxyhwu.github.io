import React from 'react';
import NavBar from './NavBar';

function BlogPage () {
  return (
    <>
      <NavBar />
      <div style={{ padding: "20px" }}>
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <p>Welcome to the blogpage!</p>
      </div>
    </>
  );
}

export default BlogPage;
