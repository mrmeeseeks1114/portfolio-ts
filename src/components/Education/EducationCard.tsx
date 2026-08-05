import "./EducationCard.css";

import type { Education } from "../../types/education";

interface EducationCardProps {
  item: Education;
}

export default function EducationCard({
  item,
}: EducationCardProps) {
  return (
    <article className="education-card">
      <span className="education-year">
        {item.duration}
      </span>

      <h3>{item.school}</h3>

      <h4>{item.degree}</h4>

      <p>{item.description}</p>
    </article>
  );
}