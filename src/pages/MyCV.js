import SideBar from "../components/SideBar";
import AboutMe from "../components/AboutMeSection";
import Education from "../components/EducationSection";
import ProfessionalExperience from "../components/ProfessionalExperienceSection";
import SoftSkills from "../components/SoftSkillsSection";
import "../styles/pages/mycv.scss";
import data from "../mocks/info-me.json";

export default function MyCV() {
  const myInfo = data.result.data;
  return (
    <div className="resume">
      <SideBar
        personalInfo={myInfo.personal_info}
        socialMedia={myInfo.social_media}
        technicalSkills={myInfo.technical_skills}
      ></SideBar>
      <div className="resume__main-content">
        <AboutMe />
        <Education />
        <ProfessionalExperience />
        <SoftSkills />
      </div>
    </div>
  );
}
