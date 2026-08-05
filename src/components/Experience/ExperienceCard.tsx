import "./ExperienceCard.css";

import type { Experience } from "../../types/experience";

interface ExperienceCardProps {
  item: Experience;
}

export default function ExperienceCard({
  item,
}: ExperienceCardProps) {
  return (
    <article className="timeline-card">
      <span>{item.duration}</span>

      <h3>{item.position}</h3>

      <h4>{item.company}</h4>

      <ul>
        {item.description.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </article>
  );
}