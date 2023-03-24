import { Button, TextField } from "@mui/material";
import React, { Fragment, useRef } from "react";
import { useState } from "react";
import Education from "./Education";

const Experience = ({ formData, setFormdata }) => {
  const startRef = useRef(null);
  const endRef = useRef(null);
  const aboutRef = useRef(null);
  const roleRef = useRef(null);
  const companyRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("yoo");
    const temp = [
      startRef.current.value,
      endRef.current.value,
      companyRef.current.value,
      roleRef.current.value,
      aboutRef.current.value,
    ];

    const lst = formData.experience;
    lst.push(temp);
    setFormdata({ ...formData, experience: lst });

    // console.log(startRef.target.value);
    // setFormdata( {
    // ...old,
    // });

    startRef.current.value = "";
    endRef.current.value = "";
    companyRef.current.value = "";
    roleRef.current.value = "";
    aboutRef.current.value = "";
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <TextField label="starting year" type="text" inputRef={startRef} />
        <TextField label="ending year" type="text" inputRef={endRef} />

        <TextField label="company name" type="text" inputRef={companyRef} />
        <TextField label="role" type="text" inputRef={roleRef} />
        <TextField label="About" type="text" inputRef={aboutRef} />
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
    </Fragment>
  );
};

export default Experience;
