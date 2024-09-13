// Projects.ts

export type Project = {
  name: string;
  image: string;
  description: string;
  details: string;
};

const projects: Project[] = [
  {
    name: "Project 1",
    image: "project1.jpg",
    description: "Description for Project 1",
    details: "Detailed description for Project 1",
  },
  {
    name: "Project 2",
    image: "project2.jpg",
    description: "Description for Project 2",
    details: "Detailed description for Project 2",
  },
  // Add more projects as needed
];

export default projects;
