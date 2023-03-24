import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";

const UserForm = ({ formData, setFormdata }) => {
  const handler = (e) => {
    //  console.log("ll");
    setFormdata({ ...formData, currentOccupation: e.target.value });
  };

  return (
    <div>
      <TextField
        label="Name"
        type="text"
        value={formData.name}
        onChange={(e) => setFormdata({ ...formData, name: e.target.value })}
      />

      <TextField
        label="Profile Pic URL"
        type="text"
        value={formData.profilePic}
        onChange={(e) =>
          setFormdata({ ...formData, profilePic: e.target.value })
        }
      />
      <TextField
        label="Occupation"
        type="text"
        value={formData.currentOccupation}
        onChange={handler}
      />
      <TextField
        label="About"
        multiline
        value={formData.about}
        onChange={(e) => setFormdata({ ...formData, about: e.target.value })}
      />
    </div>
  );
};

export default UserForm;
