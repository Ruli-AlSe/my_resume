export default function Technologies({ description, technologies }) {
  const tech = technologies.map((elem, idx) => {
    return <li key={idx}>{elem}</li>;
  });
  return (
    <div className={`technologies-${description}`}>
      <p>{description}</p>
      <ul>{tech}</ul>
    </div>
  );
}
