import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A modern personal portfolio built using React, Vite, and TypeScript.",
    image: "/projects/portfolio.png",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "CSS"
    ],
    github: "https://github.com/yourusername/portfolio"
  },
  {
    id: "2",
    title: "Student Management System",
    description: "Desktop application for managing student records.",
    image: "/projects/student.png",
    technologies: [
      "Java",
      "MySQL"
    ],
    github: "https://github.com/yourusername/student-system"
  }
];