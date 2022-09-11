import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Education({ education }) {
  const educationMap = education.map((item, idx) => (
    <div key={idx + item.school}>
      <p className="resume__header">
        <span className="resume__header resume__header--date-range">
          {`${item.dates.start_date} - ${
            item.continue_studiying === true ? "Present" : item.dates.end_date
          }`}
        </span>
        <span className="resume__header resume__header--field">
          {item.field}
        </span>
        <span className="resume__header resume__header--company">
          {item.school}
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
      <h1 className="resume__title resume__title--even">
        <FontAwesomeIcon icon={faGraduationCap} /> Education
      </h1>
      {educationMap}
    </div>
  );
}
