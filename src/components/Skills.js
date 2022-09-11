import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills({ description, skills, icon, classModifier }) {
  const skillsMap = skills.map((elem, idx) => (
    <li key={idx + description}>
      <b>{`${elem.title}: `}</b>
      {elem.value.length > 0 ? elem.value.join(", ") : elem.value}
    </li>
  ));

  return (
    <div className="sidebar__technologies sidebar__technologies--white-gackground">
      {icon && (
        <p className="sidebar__text-with-line">
          <span>
            <FontAwesomeIcon icon={icon} />
            {description}
          </span>
        </p>
      )}
      <ul
        className={`sidebar__technologies-list sidebar__technologies-list${classModifier}`}
      >
        {skillsMap}
      </ul>
    </div>
  );
}
