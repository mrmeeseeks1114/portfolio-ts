import "./Projects.css";

import Container from "../Common/Container";
import SectionTitle from "../Common/SectionTitle";
import ProjectCard from "./ProjectCard";

import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <Container>
        <SectionTitle
          title="Projects"
          subtitle="Some of my recent work"
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}