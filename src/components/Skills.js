import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills({ description, skills, icon, classModifier }) {
  const skillsMap = skills.map((elem, idx) => {
    return <li key={idx + description}>{elem}</li>;
  });
  return (
    <div className="sidebar__technologies sidebar__technologies--white-gackground">
      <p className="sidebar__text-with-line">
        <span>
          <FontAwesomeIcon icon={icon} />
          {description}
        </span>
      </p>
      <ul
        className={`sidebar__technologies-list ${
          classModifier !== undefined
            ? "sidebar__technologies-list--row"
            : "sidebar__technologies-list"
        }`}
      >
        {skillsMap}
      </ul>
    </div>
  );
}
