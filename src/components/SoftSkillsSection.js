import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

export default function SoftSkills() {
  return (
    <div className="resume__section">
      <h1 className="resume__title resume__title--even">
        <FontAwesomeIcon icon={faArrowTrendUp} /> Soft Skills
      </h1>
    </div>
  );
}
