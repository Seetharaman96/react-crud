import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

export function EditUser({ data, setData }) {
  const [idx, setIdx] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const selectedUser = data.find((per) => per.id === id);

  useEffect(() => {
    setIdx(selectedUser.id);
    setName(selectedUser.name);
    setDob(selectedUser.dob);
    setGender(selectedUser.gender);
    setQualification(selectedUser.qualification);
    setEmail(selectedUser.email);
    setDesignation(selectedUser.designation);
  }, []);

  const updateUser = () => {
    const editIndex = data.findIndex((per) => per.id === id);
    console.log(editIndex);
    const editedData = {
      id: idx,
      name,
      dob,
      gender,
      qualification,
      email,
      designation,
    };
    data[editIndex] = editedData;
    setData([...data]);
    navigate("/");
  };

  return (
    <div className="edit-user">
      <h1>welcome to the edit page</h1>
      <TextField
        id="outlined-basic"
        value={idx}
        label="Id"
        variant="outlined"
        onChange={(event) => setIdx(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={name}
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={dob}
        label="Date of birth"
        variant="outlined"
        onChange={(event) => setDob(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={gender}
        label="Gender"
        variant="outlined"
        onChange={(event) => setGender(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={qualification}
        label="Qualification"
        variant="outlined"
        onChange={(event) => setQualification(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={email}
        label="Email"
        variant="outlined"
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={designation}
        label="Designation"
        variant="outlined"
        onChange={(event) => setDesignation(event.target.value)}
      />
      <Button
        size="large"
        variant="contained"
        color="success"
        onClick={updateUser}
      >
        Save
      </Button>
    </div>
  );
}
