import React from "react";
import ProjectCard from "./ProjectCard";
import NavBar from "./NavBar";
import logo from "./logo.svg";

const projects = [
  {
    name: "Project 1",
    image: logo,
    description: "Description for Project 1",
    details: "Detailed description for Project 1",
  },
  {
    name: "Project 2",
    image: logo,
    description: "Description for Project 2",
    details: "Detailed description for Project 2",
  },
  // Add more projects as needed
];

const ProjectPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div style={{ padding: "20px" }}>
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
