import Skills from "./Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

export default function SoftSkills({ softSkills }) {
  return (
    <div className="resume__section">
      <h1 className="resume__title resume__title--even">
        <FontAwesomeIcon icon={faArrowTrendUp} /> Soft Skills
      </h1>
      <Skills
        description={"Technologies"}
        skills={softSkills[0].skills}
        classModifier="--row sidebar__technologies-list--big"
      />
    </div>
  );
}
