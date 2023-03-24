import { Button, TextField } from "@mui/material";
import React, { Fragment, useRef } from "react";

const Education2 = ({ formData, setFormdata }) => {
  const startRef = useRef(null);
  const endRef = useRef(null);
  const degRef = useRef(null);
  const placeRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const temp = [
      startRef.current.value,
      endRef.current.value,
      degRef.current.value,
      placeRef.current.value,
    ];

    console.log(startRef, temp);
    const lst = formData.education;
    lst.push(temp);
    setFormdata({ ...formData, education: lst });

    // console.log(startRef.target.value);
    // setFormdata( {
    // ...old,
    // });

    console.log(
      startRef.current.value,
      endRef.current.value,
      degRef.current.value,
      placeRef.current.value
    );

    startRef.current.value = "";
    endRef.current.value = "";
    degRef.current.value = "";
    placeRef.current.value = "";
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <TextField label="starting year" type="text" inputRef={startRef} />
        <TextField label="ending year" type="text" inputRef={endRef} />

        <TextField label="degree" type="text" inputRef={degRef} />
        <TextField
          label="university / college / school"
          type="text"
          inputRef={placeRef}
        />
        <Button variant="outlined">Submit</Button>
      </form>
    </Fragment>
  );
};

export default Education2;
