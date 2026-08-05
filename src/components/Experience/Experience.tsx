import "./Experience.css";

import Container from "../Common/Container";
import SectionTitle from "../Common/SectionTitle";
import ExperienceCard from "./ExperienceCard";

import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <Container>
        <SectionTitle
          title="Experience"
          subtitle="Projects and development journey"
        />

        <div className="timeline">
          {experience.map((item) => (
            <ExperienceCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}