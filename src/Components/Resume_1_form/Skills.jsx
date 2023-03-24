import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const Skills = ({ formData, setFormdata }) => {
  const IntersestsHandler = (e) => {
    const inte = e.target.value.split(",");
    console.log(inte);
    setFormdata({ ...formData, interests: inte });
  };

  const professionalSkillsHandler = (e) => {
    const inte = e.target.value.split(",");
    console.log(inte);
    setFormdata({ ...formData, professionalSkills: inte });
  };

  const languagesHandler = (e) => {
    const inte = e.target.value.split(",");
    console.log(inte);
    setFormdata({ ...formData, spokenLang: inte });
  };

  return (
    <div>
      <TextField
        label="Interests"
        placeholder="reading,shopping,games"
        type="text"
        value={formData.interests}
        onChange={IntersestsHandler}
        multiline
      />

      <TextField
        label="Professional Skills"
        placeholder="node js - 100,java-040,cpp-090"
        type="text"
        value={formData.professionalSkills}
        onChange={professionalSkillsHandler}
        multiline
      />

      <TextField
        label="Spoken Languages"
        placeholder="english-100,tamil-99,french-22"
        type="text"
        value={formData.spokenLang}
        onChange={languagesHandler}
        multiline
      />
    </div>
  );
};

export default Skills;
