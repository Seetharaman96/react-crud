import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function AddUser({ data, setData }) {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");

  return (
    <div className="add-user">
      <h1>Hello all welcome to add user page</h1>
      <TextField
        id="outlined-basic"
        label="Id"
        type="text"
        variant="outlined"
        onChange={(event) => setId(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Name"
        type="text"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Date of birth"
        variant="outlined"
        onChange={(event) => setDob(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Gender"
        variant="outlined"
        onChange={(event) => setGender(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Qualification"
        variant="outlined"
        onChange={(event) => setQualification(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        type="email"
        variant="outlined"
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Designation"
        variant="outlined"
        onChange={(event) => setDesignation(event.target.value)}
      />
      <Button
        size="large"
        variant="contained"
        onClick={() => {
          const newData = {
            id,
            name,
            dob,
            gender,
            qualification,
            email,
            designation,
          };
          setData([...data, newData]);
          navigate("/");
        }}
      >
        Add User
      </Button>
    </div>
  );
}
