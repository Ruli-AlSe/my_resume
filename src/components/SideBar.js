import Technologies from "./Technologies";

export default function SideBar() {
  return (
    <div className="sidebar">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D03AQFbmxRfcXiyxg/profile-displayphoto-shrink_800_800/0/1592952962315?e=1666828800&v=beta&t=RV_S2I31GxIGeeLih5g21XixOlx1kgs1wFHfHLnBCmw"
        alt="profile pic"
      />
      <h2 className="name">Raul Alejandro Almanza Serrano</h2>
      <h3 className="job-title">Frontend and Experimentation Developer</h3>
      <div className="personal-info">
        <p className="birthday">June 2, 1993</p>
        <p className="location">Tlaquepaque, Jal.</p>
        <p className="celphone">+52 - (456) - 114 - 62 - 17</p>
        <div className="social-media">
          <p className="linkedin">
            Linkedin: <span>www.linkedin.com/in/ruli-alse</span>
          </p>
          <p className="github">
            Github: <span>https://github.com/Ruli-AlSe</span>
          </p>
          <p className="email">
            Gmail: <span>ra.almazaserrano@gmail.com</span>
          </p>
        </div>
        <Technologies
          description={"fontend"}
          technologies={["React.js", "Next.js", "Jest", "SASS", "TestCafe"]}
        />
        <Technologies
          description={"backend"}
          technologies={["Ruby on Rails", "Postgresql", "MongoDB", "Git", ""]}
        />
        <Technologies
          description={"devops"}
          technologies={["Github CI/CD", "Docker", "Vagrant"]}
        />
        <Technologies
          description={"programing-languages"}
          technologies={["JS", "TS", "Ruby", "C++", "Python"]}
        />
        <Technologies
          description={"languages"}
          technologies={["Espanish", "English"]}
        />
      </div>
    </div>
  );
}
