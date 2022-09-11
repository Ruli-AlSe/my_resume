import JobDescription from "./JobDescription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { faComputer, faGears } from "@fortawesome/free-solid-svg-icons";

export default function ProfessionalExperience({ experience }) {
  const experiencesMap = experience.map((item, idx) => (
    <JobDescription
      key={idx + item.company}
      dates={`${item.dates.start_date} - ${
        item.dates.continue_working === true ? "Present" : item.dates.end_date
      }`}
      title={item.role}
      company={item.company}
      description={item.overview}
      accomplishments={item.accomplishments}
      technologiesList={item.technologies_stack.skills}
      icon={idx === 0 ? faComputer : faGears}
    />
  ));

  return (
    <div className="resume__section">
      <h1 className="resume__title resume__title--odd">
        <FontAwesomeIcon icon={faHouseLaptop} /> Professional Experience
      </h1>
      {experiencesMap}
    </div>
  );
}
