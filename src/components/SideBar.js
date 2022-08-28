import Technologies from "./Technologies";
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
        <p className="sidebar__text">June 2, 1993</p>
        <p className="sidebar__text">Tlaquepaque, Jal.</p>
        <p className="sidebar__text">+52 (456) 114 6217</p>
        <div className="sidebar__social-media">
          <p className="sidebar__text">
            Linkedin: <span>www.linkedin.com/in/ruli-alse</span>
          </p>
          <p className="sidebar__text">
            Github: <span>https://github.com/Ruli-AlSe</span>
          </p>
          <p className="sidebar__text">
            Gmail: <span>ra.almazaserrano@gmail.com</span>
          </p>
        </div>
      </div>
      <Technologies
        description={"Frontend"}
        technologies={["React.js", "Next.js", "Jest", "SASS", "TestCafe"]}
      />
      <Technologies
        description={"Backend"}
        technologies={["Ruby on Rails", "Postgresql", "MongoDB", "Git"]}
      />
      <Technologies
        description={"DevOps"}
        technologies={["Github CI/CD", "Docker", "Vagrant"]}
      />
      <Technologies
        description={"Programing Languages"}
        technologies={["JS", "TS", "Ruby", "C++", "Python"]}
      />
      <Technologies
        description={"Languages"}
        technologies={["Espanish", "English"]}
      />
    </div>
  );
}
