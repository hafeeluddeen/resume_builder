import React, { Fragment, useState } from "react";
import Education2 from "./Education2";
import Experience2 from "./Experience2";
import Skills2 from "./Skills2";
import Contact2 from "./Contact2";
import UserForm2 from "./UserForm2";
import { Button } from "@mui/material";

const MainForm2 = () => {
  const [page, setPage] = useState(0);

  const [formData, setFormdata] = useState({
    profilePic: "",

    //personal
    name: "",
    about: "",
    //  currentOccupation: "",
    //skills
    interests: [],
    professionalSkills: [],

    //contact
    WorkEmail: "",
    PersonalEmail: "",

    WorkPhoneNo: "",
    PersonalPhoneNo: "",

    // exp and edu..
    experience: [],
    education: [],
  });

  const FormTitles = [
    "UserForm2",
    "Education2",
    "Skills2",
    "Experience2",
    "Contact2",
  ];

  const PageDisplay = () => {
    if (page === 0)
      return <UserForm2 formData={formData} setFormdata={setFormdata} />;

    if (page === 1)
      return <Education2 formData={formData} setFormdata={setFormdata} />;

    if (page === 2)
      return <Skills2 formData={formData} setFormdata={setFormdata} />;

    if (page === 3)
      return <Experience2 formData={formData} setFormdata={setFormdata} />;

    if (page === 4)
      return <Contact2 formData={formData} setFormdata={setFormdata} />;
  };

  return (
    <Fragment>
      <h1>{FormTitles[page]}</h1>
      {PageDisplay()}
      <Button disabled={page === 0} onClick={(e) => setPage((old) => old - 1)}>
        prev
      </Button>
      <Button
        disabled={page + 1 === FormTitles.length}
        onClick={(e) => setPage((old) => old + 1)}
      >
        next
      </Button>
    </Fragment>
  );
};

export default MainForm2;
