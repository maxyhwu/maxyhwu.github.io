import React from 'react';
import NavBar from './NavBar';

function HomePage () {
  return (
    <>
      <NavBar />
      <h1 className='text-4xl mb-8 font-semibold'>Home</h1>
      <p>Welcome to the homepage!</p>
    </>
  );
}

export default HomePage;
