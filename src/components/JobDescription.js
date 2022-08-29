import Skills from "./Skills";

export default function JobDescription({
  dates,
  title,
  company,
  description,
  accomplishments,
  icon,
  technologiesList,
}) {
  const accomplishmentsMap = accomplishments.map((elem) => (
    <li key={elem}>{elem}</li>
  ));

  return (
    <div className="resume__job-container">
      <p className="resume__header">
        <span className="resume__header resume__header--date-range">
          {dates}
        </span>
        <span className="resume__header resume__header--field">{title}</span>
        <span className="resume__header resume__header--company">
          {company}
        </span>
      </p>
      <div className="resume__container--with-padding">
        <p className="resume__paragraph">{description}</p>
        <p className="resume__paragraph resume__paragraph--with-indentation">
          Major accomplishments:
        </p>
        <ul className="resume__job-details">{accomplishmentsMap}</ul>
        <Skills
          description={"Technologies"}
          skills={technologiesList}
          icon={icon}
          classModifier="--row"
        />
      </div>
    </div>
  );
}
