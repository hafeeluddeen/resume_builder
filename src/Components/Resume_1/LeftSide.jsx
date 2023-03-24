import React from "react";
import pht from "./logo512.png";
const LeftSide = ({ formData }) => {
  console.log("hello", formData);
  const EducationInfo = formData.education;
  const ContactInfo = [
    formData.email,
    formData.website,
    formData.location,
    formData.phoneNo,
  ];
  const LanguageInfo = formData.spokenLang;

  return (
    <div className="left_Side">
      <div className="profileText">
        <div className="imgBx">
          <img className="photo" src={formData.profilePic} />
        </div>
        <br />
        <h2>
          {formData.name} <br />
          <span>{formData.currentOccupation}</span>
        </h2>
      </div>

      <div className="contactInfo">
        <h3 className="title">Contact Info</h3>
        <ul>
          {ContactInfo.map((info) => (
            <li>
              <span className="icon">
                <i aria-hidden="true"></i>
              </span>
              <span className="text">{info}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="contactInfo education">
        <h3 className="title">Education</h3>
        <ul>
          {EducationInfo.map((info) => (
            <li>
              <h5>{`${info[0]} - ${info[1]}`}</h5>
              <h4>{`${info[2]}`}</h4>
              <h4>{`${info[3]}`}</h4>
            </li>
          ))}
        </ul>
      </div>

      <div className="contactInfo language">
        <h3 className="title">Languages</h3>
        <ul>
          {LanguageInfo.map((info) => {
            const [lang, percent] = info.split("-");
            return (
              <li>
                <span className="text">{`${lang}`}</span>
                <span className="percent" style={{ width: `${percent}%` }}>
                  <div data-language="russian"></div>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftSide;
