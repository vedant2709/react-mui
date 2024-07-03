import Checkbox from "@mui/material/Checkbox";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

function Form() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    courses: "",
    terms: false,
    gender: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
        paddingBlock:"50px"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          gap: "30px",
        }}
      >
        <TextField
          name="name"
          type="text"
          variant="standard"
          label="Name"
          value={inputs.name}
          onChange={handleChange}
        />
        <TextField
          name="email"
          type="email"
          variant="standard"
          label="Email"
          value={inputs.email}
          onChange={handleChange}
        />
        <TextField
          name="password"
          type="password"
          variant="standard"
          label="Password"
          value={inputs.password}
          onChange={handleChange}
        />
        <FormControl sx={{ width: "100%" }}>
          <InputLabel>Courses</InputLabel>
          <Select
            label="courses"
            value={inputs.courses}
            name="courses"
            onChange={handleChange}
          >
            <MenuItem value="mongodb">MongoDB</MenuItem>
            <MenuItem value="express">Express</MenuItem>
            <MenuItem value="react">React</MenuItem>
          </Select>
        </FormControl>
        <FormGroup>
          <FormControlLabel
            label="I agree T&C"
            control={
              <Checkbox
                onChange={() => {
                  setInputs((prevState) => ({
                    ...prevState,
                    terms: !inputs.terms,
                  }));
                }}
              />
            }
          />
        </FormGroup>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            name="gender"
            onChange={handleChange}
          >
            <FormControlLabel value={"male"} label="Male" control={<Radio />} />
            <FormControlLabel
              value={"female"}
              label="Female"
              control={<Radio />}
            />
            <FormControlLabel
              value={"other"}
              label="Other"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "50%", marginX: "auto" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;
