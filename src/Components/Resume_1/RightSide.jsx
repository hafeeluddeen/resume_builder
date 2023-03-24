import React from "react";

const RightSide = ({ formData }) => {
  const ProfessionalSkillsInfo = formData.professionalSkills;
  const InterstsInfo = formData.interests;
  const ExperienceInfo = formData.experience;
  // console.log("helllllllllo", InterstsInfo, ExperienceInfo);

  return (
    <div className="right_Side">
      <div className="about">
        <h2 className="title2">Profile</h2>
        <p>
          {`${formData.about}`}
          <br /> <br />
        </p>
      </div>

      <div className="about experience">
        <h2 className="title2">Experience</h2>
        {console.log(ExperienceInfo)}
        {ExperienceInfo.map((info, i) => {
          return (
            <div className="box" key={i}>
              <div className="year_company">
                <h5>{`${info[0]}`}</h5>
                <h5>{`${info[2]}`}</h5>
              </div>
              <div className="text">
                <h4>{`${info[3]}`}</h4>
                <p>{`${info[4]}`}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="about skills">
        <h2 className="title2">Professionals skills</h2>
        {ProfessionalSkillsInfo.map((info, i) => {
          const [skill, per] = info.split("-");
          return (
            <div className="box" key={i}>
              <h4>{`${skill}`}</h4>
              <div className="percent" style={{ width: per + "%" }}>
                <div data-knowledge="html"></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="about interest">
        <h2 className="title2">Interests</h2>
        <ul>
          {InterstsInfo.map((info) => (
            <li>
              <i aria-hidden="true"></i>
              {`${info}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSide;
