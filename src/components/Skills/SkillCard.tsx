import "./SkillCard.css";

import type { Skill } from "../../types/skill";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({
  skill,
}: SkillCardProps) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        {skill.icon}
      </div>

      <h3>{skill.name}</h3>

      <p>{skill.description}</p>
    </div>
  );
}