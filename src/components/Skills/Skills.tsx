import "./Skills.css";

import Container from "../Common/Container";
import SectionTitle from "../Common/SectionTitle";
import SkillCard from "./SkillCard";

import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <Container>
        <SectionTitle
          title="Skills"
          subtitle="Technologies and tools I use"
        />

        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}