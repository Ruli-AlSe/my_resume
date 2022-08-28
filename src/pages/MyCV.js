import SideBar from "../components/SideBar";
import AboutMe from "../components/AboutMe";
import "../styles/pages/mycv.scss";

export default function MyCV() {
  return (
    <div className="resume">
      <SideBar></SideBar>
      <div className="resume__main-content">
        <AboutMe />
      </div>
    </div>
  );
}
