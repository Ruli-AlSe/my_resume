import Skills from "./Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faCakeCandles,
  faComputer,
  faGears,
  faTerminal,
  faCode,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/components/sidebar.scss";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__profile-pic">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFbmxRfcXiyxg/profile-displayphoto-shrink_800_800/0/1592952962315?e=1666828800&v=beta&t=RV_S2I31GxIGeeLih5g21XixOlx1kgs1wFHfHLnBCmw"
          alt="profile pic"
        />
      </div>
      <h2 className="sidebar__text sidebar__text--name">
        Raul Alejandro Almanza Serrano
      </h2>
      <h3 className="sidebar__text sidebar__text--title">
        Frontend and Experimentation Developer
      </h3>
      <div className="sidebar__personal-info">
        <p className="sidebar__text">
          <FontAwesomeIcon icon={faCakeCandles} />
          June 2, 1993
        </p>
        <p className="sidebar__text">
          <FontAwesomeIcon icon={faLocationDot} />
          Tlaquepaque, Jal.
        </p>
        <p className="sidebar__text">
          <FontAwesomeIcon icon={faWhatsapp} />
          +52 (456) 114 6217
        </p>
        <div className="sidebar__social-media">
          <p className="sidebar__text">
            <FontAwesomeIcon icon={faLinkedin} />
            Linkedin: <span>www.linkedin.com/in/ruli-alse</span>
          </p>
          <p className="sidebar__text">
            <FontAwesomeIcon icon={faGithub} />
            Github: <span>https://github.com/Ruli-AlSe</span>
          </p>
          <p className="sidebar__text">
            <FontAwesomeIcon icon={faEnvelope} />
            Gmail: <span>ra.almazaserrano@gmail.com</span>
          </p>
        </div>
      </div>
      <Skills
        description={"Frontend"}
        skills={["React.js", "Jest", "SASS", "HTML5", "jQuery", "JS ES6"]}
        icon={faComputer}
      />
      <Skills
        description={"Backend"}
        skills={["Ruby on Rails", "Postgresql"]}
        icon={faGears}
      />
      <Skills
        description={"DevOps"}
        skills={["Github CI/CD", "Docker", "Vagrant"]}
        icon={faTerminal}
      />
      <Skills
        description={"Programing Languages"}
        skills={["JavaScript", "TypeScript", "Ruby", "Python"]}
        icon={faCode}
      />
      <Skills
        description={"Languages"}
        skills={["Spanish (native)", "English (Conversational)"]}
        icon={faLanguage}
      />
    </div>
  );
}
