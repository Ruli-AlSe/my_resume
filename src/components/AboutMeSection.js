import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function AboutMe({ info }) {
  return (
    <div className="resume__section">
      <h1 className="resume__title resume__title--odd">
        <FontAwesomeIcon icon={faUser} /> About Me...
      </h1>
      <p className="resume__paragraph">{info}</p>
    </div>
  );
}
