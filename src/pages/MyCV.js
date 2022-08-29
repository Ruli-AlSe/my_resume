import SideBar from "../components/SideBar";
import AboutMe from "../components/AboutMeSection";
import Education from "../components/EducationSection";
import ProfessionalExperience from "../components/ProfessionalExperienceSection";
import SoftSkills from "../components/SoftSkillsSection";
import "../styles/pages/mycv.scss";

export default function MyCV() {
  return (
    <div className="resume">
      <SideBar></SideBar>
      <div className="resume__main-content">
        <AboutMe />
        <Education />
        <ProfessionalExperience />
        <SoftSkills />
      </div>
    </div>
  );
}
