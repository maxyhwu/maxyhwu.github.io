import React from "react";
import NavBar from "./NavBar";
import ThemeSwitch from "./ThemeSwitch";

const HomePage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="relative top-4 left-4">
        <ThemeSwitch />
      </div>
      <header className="bg-white text-gray-900 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to Max's Personal Website</h1>
          <p className="mt-4 text-lg">Senior Student</p>
          <p className="mt-4 text-lg">Taipei, Taiwan</p>
          <div className="flex justify-center mt-8">
            <a href="mailto:maxyhwu.tw@gmail.com" className="text-lg mr-4 hover:underline">maxyhwu.tw@gmail.com</a>
            <a href="https://github.com/maxyhwu" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">GitHub</a>
            {/* Add more links as needed */}
          </div>
        </div>
      </header>
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">About Me</h2>
          <p className="text-lg">

          </p>
        </div>
      </section>
      <footer className="bg-white text-gray-900 py-8 text-center">
        <div className="container mx-auto">
          <p className="text-sm">&copy; {new Date().getFullYear()} Yu-Hsuan Wu. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
