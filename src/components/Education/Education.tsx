import "./Education.css";

import Container from "../Common/Container";
import SectionTitle from "../Common/SectionTitle";
import EducationCard from "./EducationCard";

import { education } from "../../data/education";

export default function Education() {
  return (
    <section id="education" className="education">
      <Container>
        <SectionTitle
          title="Education"
          subtitle="My academic journey"
        />

        <div className="education-list">
          {education.map((item) => (
            <EducationCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}