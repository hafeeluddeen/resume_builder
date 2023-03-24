import { Button, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";
import Resume_2 from "../Resume_2/Resume_2";

const Contact2 = ({ formData, setFormdata }) => {
  const [isEdit, setIsEdit] = useState(true);

  const submitHandler = (e) => {
    console.log("hello");
    e.preventDefault();
    console.log(formData);
    setIsEdit(false);
    return <Resume_2 formData={formData} />;
  };

  return (
    <Fragment>
      {isEdit === true ? (
        <div>
          <form onSubmit={submitHandler}>
            <TextField
              label="Personal Email"
              type="text"
              value={formData.WorkEmail}
              onChange={(e) =>
                setFormdata({ ...formData, WorkEmail: e.target.value })
              }
            />

            <TextField
              label="Work Email"
              type="text"
              value={formData.PersonalEmail}
              onChange={(e) =>
                setFormdata({ ...formData, PersonalEmail: e.target.value })
              }
            />

            <TextField
              label=" Work Phone no"
              type="text"
              value={formData.WorkPhoneNo}
              onChange={(e) =>
                setFormdata({ ...formData, WorkPhoneNo: e.target.value })
              }
            />

            <TextField
              label="phone no"
              type="text"
              value={formData.PersonalPhoneNo}
              onChange={(e) =>
                setFormdata({ ...formData, PersonalPhoneNo: e.target.value })
              }
            />

            <Button variant="outlined" onClick={submitHandler}>
              Submit
            </Button>
          </form>
        </div>
      ) : (
        <Resume_2 formData={formData} />
      )}
    </Fragment>
  );
};

export default Contact2;
