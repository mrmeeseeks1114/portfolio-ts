import "./AboutCard.css";

import profile from "../../assets/images/profile.jpg";

export default function AboutCard() {
  return (
    <div className="hero-image">
      <img
        src={profile}
        alt="Neil Patrick Peralta"
      />
    </div>
  );
}