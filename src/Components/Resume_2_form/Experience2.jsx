import { Button, TextField } from "@mui/material";
import React, { Fragment, useRef } from "react";

const Experience2 = ({ formData, setFormdata }) => {
  const startRef = useRef(null);
  const endRef = useRef(null);
  const aboutRef = useRef(null);
  const roleRef = useRef(null);
  const companyRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

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
        <Button variant="outlined">Submit</Button>
      </form>
    </Fragment>
  );
};

export default Experience2;
