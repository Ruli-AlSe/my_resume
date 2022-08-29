import JobDescription from "./JobDescription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { faComputer, faGears } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
  return (
    <div className="resume__section">
      <h1 className="resume__title resume__title--odd">
        <FontAwesomeIcon icon={faHouseLaptop} /> Professional Experience
      </h1>
      <JobDescription
        dates="2020 - present"
        title="Frontend and Experimentation Developer"
        company="HP Inc. - by contract"
        description="Setup and development of ABtests and Personalization Campaigns for customer engagement and sales increase in online stores worldwide"
        accomplishments={[
          "Development and setup of ABTest and Personalization campaigns with Optimizely tool.",
          "Click tracking integration with Adobe and Google Analytics.",
          "Bug detection and manual QA in campaigns of teammates.",
          "Outstanding stakeholder service and owners of different stores.",
          "Analysis of requirements to target right customers in personalization campaigns.",
          "Use of best practices in code to match layout comps with CSS and HTML and get the best response and performance with Javascript.",
        ]}
        technologiesList={[
          "Optimizely",
          "CSS3",
          "SASS",
          "HTML5",
          "jQuery",
          "JS ES6",
          "React.js",
          "Git",
          "Postman",
          "TypeScript",
        ]}
        icon={faComputer}
      />
      <JobDescription
        dates="2018 - 2020"
        title="Web Software Developer"
        company="Thincode"
        description="Development and migration of REST API for web applications using Ruby on Rails and PostgreSQL working under Agile methodologies."
        accomplishments={[
          "Development of REST APIs for web applications using Rails.",
          "React.js for Front-End development of web applications.",
          "Creation of unitary tests using RSpec and Byebug for debugging.",
          "Training of new team members.",
          "Analysis and technical research of project activities.",
          "Actively participation on reviewing Pull Requests code of my teammates.",
        ]}
        technologiesList={[
          "Ruby on Rails",
          "React.js",
          "PostgreSQL",
          "RSpec",
          "Vagrant",
          "Git",
          "Bitbucked",
          "Docker",
        ]}
        icon={faGears}
      />
    </div>
  );
}
