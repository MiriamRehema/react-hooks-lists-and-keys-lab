import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div > {projects.map((project) => (
      <ProjectItem
        key={project.id}
        id={project.id}
        name={project.name}
        description={project.description}
        url={project.url}
      />
    ))}
    </div>
  
  )
}

export default ProjectList;
