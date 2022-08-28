import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Technologies({ description, technologies, icon }) {
  const tech = technologies.map((elem, idx) => {
    return <li key={idx + description}>{elem}</li>;
  });
  return (
    <div className="sidebar__technologies">
      <p className="sidebar__text-with-line">
        <span>
          <FontAwesomeIcon icon={icon} />
          {description}
        </span>
      </p>
      <ul className="sidebar__technologies-list">{tech}</ul>
    </div>
  );
}
