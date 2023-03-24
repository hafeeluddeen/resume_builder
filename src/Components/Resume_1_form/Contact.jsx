import { Button, TextField } from "@mui/material";
import React, { Fragment } from "react";
import { useState } from "react";
import Resume_1 from "../Resume_1/Resume_1";

const Contact = ({ formData, setFormdata }) => {
  const [isEdit, setIsEdit] = useState(true);

  const submitHandler = (e) => {
    console.log("hello");
    e.preventDefault();
    console.log(formData);
    setIsEdit(false);
  };

  return (
    <Fragment>
      {isEdit === true ? (
        <div>
          <form onSubmit={submitHandler}>
            <TextField
              label="email"
              type="text"
              value={formData.email}
              onChange={(e) =>
                setFormdata({ ...formData, email: e.target.value })
              }
            />

            <TextField
              label="website"
              type="text"
              value={formData.website}
              onChange={(e) =>
                setFormdata({ ...formData, website: e.target.value })
              }
            />

            <TextField
              label="location"
              type="text"
              value={formData.location}
              onChange={(e) =>
                setFormdata({ ...formData, location: e.target.value })
              }
            />

            <TextField
              label="phone no"
              type="text"
              value={formData.phoneNo}
              onChange={(e) =>
                setFormdata({ ...formData, phoneNo: e.target.value })
              }
            />

            <Button variant="outlined" onClick={submitHandler}>
              Submit
            </Button>
          </form>
        </div>
      ) : (
        <Resume_1 formData={formData} />
      )}
    </Fragment>
  );
};

export default Contact;
