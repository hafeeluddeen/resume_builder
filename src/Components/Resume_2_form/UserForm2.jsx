import { TextField } from "@mui/material";
import React from "react";

const UserForm2 = ({ formData, setFormdata }) => {
  //   const handler = (e) => {
  //     console.log("ll");
  //     setFormdata({ ...formData, currentOccupation: e.target.value });
  //   };

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
        label="About"
        multiline
        value={formData.about}
        onChange={(e) => setFormdata({ ...formData, about: e.target.value })}
      />
    </div>
  );
};

export default UserForm2;
