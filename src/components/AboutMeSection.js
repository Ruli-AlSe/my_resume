import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function AboutMe() {
  return (
    <div className="resume__section">
      <h1 className="resume__title resume__title--odd">
        <FontAwesomeIcon icon={faUser} /> About Me...
      </h1>
      <p className="resume__paragraph">
        I am an enthusiastic person and passionate about web development. In
        latest years, I have been working in a large scale company as an
        experimentation developer creating and setting up ABtests and
        personalization campaigns into all online stores of the company to
        improve the user experience, customer engagement and increase sales. I
        Focusing on providing high quality code with good performance, excellent
        and continuous communication with stakeholders for alignment in
        campaigns goals. <br />
        <br />I like to be in continuous researching about new technologies in
        software development for web asides of new ways to improve my current
        skills. In the last months i have been learning and praticing with React
        and Redux libraries, also reviewing and improving my skills with RoR and
        learning about design patterns and interesting things about fullstack
        web development by my own.
      </p>
    </div>
  );
}
