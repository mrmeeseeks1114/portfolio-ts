interface ContactCardProps {
  title: string;
  value: string;
}

export default function ContactCard({
  title,
  value,
}: ContactCardProps) {
  return (
    <div className="contact-card">
      <h3>{title}</h3>

      <p>{value}</p>
    </div>
  );
}