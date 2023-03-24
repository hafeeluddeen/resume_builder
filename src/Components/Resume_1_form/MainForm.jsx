import { Button } from "@mui/material";
import React, { Fragment, useState } from "react";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import UserForm from "./UserForm";

export const MainForm = () => {
  // used to keep track of pg no
  const [page, setPage] = useState(0);

  const [formData, setFormdata] = useState({
    profilePic: "",

    //personal
    name: "",
    about: "",
    currentOccupation: "",
    //skills
    interests: [],
    professionalSkills: [],
    spokenLang: [],

    //contact
    email: "",
    website: "",
    location: "",
    phoneNo: "",

    // exp and edu..
    experience: [],
    education: [],
  });

  const FormTitles = [
    "UserForm",
    "Education",
    "Skills",
    "Experience",
    "Contact",
  ];

  const PageDisplay = () => {
    if (page === 0)
      return <UserForm formData={formData} setFormdata={setFormdata} />;

    if (page === 1)
      return <Education formData={formData} setFormdata={setFormdata} />;

    if (page === 2)
      return <Skills formData={formData} setFormdata={setFormdata} />;

    if (page === 3)
      return <Experience formData={formData} setFormdata={setFormdata} />;

    if (page === 4)
      return <Contact formData={formData} setFormdata={setFormdata} />;
  };

  return (
    <Fragment>
      <h1>{FormTitles[page]}</h1>
      {PageDisplay()}

      <Button
        disabled={page === 0}
        onClick={(e) => setPage((old) => old - 1)}
        variant="outlined"
      >
        prev
      </Button>
      <Button
        disabled={page + 1 === FormTitles.length}
        onClick={(e) => setPage((old) => old + 1)}
        variant="outlined"
      >
        next
      </Button>
    </Fragment>
  );
};
