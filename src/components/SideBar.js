import Skills from "./Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
  faStackOverflow,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faCakeCandles,
  faComputer,
  faLanguage,
  faPhone,
  faEarth,
  faBookAtlas,
  faScrewdriverWrench,
  faDatabase,
  faWrench,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/components/sidebar.scss";

export default function SideBar({
  personalInfo,
  socialMedia,
  technicalSkills,
}) {
  const socialMediaIcons = {
    github: faGithub,
    linkedin: faLinkedin,
    whatsapp: faWhatsapp,
    stackoverflow: faStackOverflow,
    twitter: faTwitter,
    facebook: faFacebook,
    personalsite: faEarth,
  };
  const socialMediaMap = socialMedia.map((item, idx) => (
    <p key={idx + item.name} className="sidebar__text">
      <FontAwesomeIcon icon={socialMediaIcons[item.name]} />
      <a href={item.url}>{item.user}</a>
    </p>
  ));
  const techSkillsIcons = {
    "Programming Languages": faComputer,
    "Frameworks & Libraries": faBookAtlas,
    DevOps: faScrewdriverWrench,
    Database: faDatabase,
    Tools: faWrench,
    Agile: faCheck,
    Languages: faLanguage,
  };
  const technicalSkillsMap = technicalSkills.map((item, idx) => {
    return (
      <Skills
        key={idx + item.section_name}
        description={item.section_name}
        skills={item.skills}
        icon={techSkillsIcons[item.section_name]}
      />
    );
  });

  return (
    <div className="sidebar">
      <div className="sidebar__profile-pic">
        <img src={personalInfo.photo_url} alt="profile pic" />
      </div>
      <h2 className="sidebar__text sidebar__text--name">
        {`${personalInfo.name} ${personalInfo.last_name}`}
      </h2>
      <h3 className="sidebar__text sidebar__text--title">
        {personalInfo.role_description}
      </h3>
      <div className="sidebar__personal-info">
        <p className="sidebar__text">
          <FontAwesomeIcon icon={faEnvelope} />
          {personalInfo.email}
        </p>
        <p className="sidebar__text">
          <FontAwesomeIcon icon={faCakeCandles} />
          {personalInfo.birthday}
        </p>
        <p className="sidebar__text">
          <FontAwesomeIcon icon={faLocationDot} />
          {personalInfo.location}
        </p>
        {personalInfo.phone_number.length > 0 && (
          <p className="sidebar__text">
            <FontAwesomeIcon icon={faPhone} />
            {personalInfo.phone_number}
          </p>
        )}
        <div className="sidebar__social-media">{socialMediaMap}</div>
      </div>
      {technicalSkillsMap}
    </div>
  );
}
