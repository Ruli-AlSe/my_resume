import Technologies from "./Technologies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faCakeCandles,
  faComputer,
  faGears,
  faTerminal,
  faCode,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/sidebar.scss";

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
          <FontAwesomeIcon icon={faPhone} />
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
      <Technologies
        description={"Frontend"}
        technologies={[
          "React.js",
          "Next.js",
          "Jest",
          "SASS",
          "HTML5",
          "jQuery",
          "JS ES6",
        ]}
        icon={faComputer}
      />
      <Technologies
        description={"Backend"}
        technologies={["Ruby on Rails", "Postgresql"]}
        icon={faGears}
      />
      <Technologies
        description={"DevOps"}
        technologies={["Github CI/CD", "Docker", "Vagrant"]}
        icon={faTerminal}
      />
      <Technologies
        description={"Programing Languages"}
        technologies={["JavaScript", "TypeScript", "Ruby", "Python"]}
        icon={faCode}
      />
      <Technologies
        description={"Languages"}
        technologies={["Spanish (native)", "English (Conversational)"]}
        icon={faLanguage}
      />
    </div>
  );
}
