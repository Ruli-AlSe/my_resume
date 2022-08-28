import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Education() {
  return (
    <div className="resume__section">
      <h1 className="resume__title resume__title--even">
        <FontAwesomeIcon icon={faGraduationCap} /> Education
      </h1>
      <p className="resume__header">
        <span className="resume__header resume__header--date-range">
          2013 - 2018
        </span>
        <span className="resume__header resume__header--field">
          Computer Science Engineer
        </span>
        <span className="resume__header resume__header--company">
          Universidad de Guanajuato - DICIS
        </span>
      </p>
      <p className="resume__paragraph resume__paragraph--with-indentation">
        Focus on software development for web.
      </p>
    </div>
  );
}
