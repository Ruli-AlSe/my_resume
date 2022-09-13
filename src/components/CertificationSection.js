import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

export default function Certification({ certifications }) {
  const certificationsMap = certifications.map((item, idx) => (
    <div key={idx + item.name + item.year}>
      <p className="resume__header">
        <span className="resume__header resume__header--date-range">
          {item.year}
        </span>
        <span className="resume__header resume__header--field">
          {item.name}
        </span>
        <span className="resume__header resume__header--company">
          {item.company}
        </span>
      </p>
      <ul className="resume__paragraph resume__paragraph--with-indentation">
        {item.description.map((desc, idx) => (
          <li key={idx + desc}>{desc}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div className="resume__section">
      <h1 className="resume__title resume__title--odd">
        <FontAwesomeIcon icon={faCertificate} /> Courses and Certifications
      </h1>
      {certificationsMap}
    </div>
  );
}
