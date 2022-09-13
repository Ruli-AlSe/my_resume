import SideBar from "../components/SideBar";
import AboutMe from "../components/AboutMeSection";
import Education from "../components/EducationSection";
import ProfessionalExperience from "../components/ProfessionalExperienceSection";
import SoftSkills from "../components/SoftSkillsSection";
import Certification from "../components/CertificationSection";
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
        <AboutMe info={myInfo.self_description} />
        <Education education={myInfo.education} />
        <ProfessionalExperience experience={myInfo.professional_experience} />
        <SoftSkills softSkills={myInfo.soft_skills} />
        <Certification certifications={myInfo.certifications} />
      </div>
    </div>
  );
}
