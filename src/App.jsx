import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AddUser } from "./AddUser";
import { Home } from "./Home";
import { EditUser } from "./EditUser";
import { User } from "./User";
import { NotFound } from "./NotFound";
import { useEffect, useState } from "react";

function App() {
  const initialDatas = [
    {
      id: "99",
      name: "Seetharaman",
      dob: "28.07.1996",
      gender: "Male",
      qualification: "B.E",
      email: "seetharaman@gmail.com",
      designation: "Software Engineer",
    },
    {
      id: "100",
      name: "Aadhira",
      dob: "30.01.1996",
      gender: "Female",
      qualification: "MBBS",
      email: "aadhira@gmail.com",
      designation: "Doctor",
    },
    {
      id: "101",
      name: "Krishnan",
      dob: "05.05.1965",
      gender: "Male",
      qualification: "B.A",
      email: "krishnan@gmail.com",
      designation: "Govt. Offcer",
    },
    {
      id: "102",
      name: "Dhanam",
      dob: "27.01.1967",
      gender: "Female",
      qualification: "B.A",
      email: "dhanam@gmail.com",
      designation: "Govt. Offcer",
    },
    {
      id: "103",
      name: "Raghu",
      dob: "14.05.1994",
      gender: "Male",
      qualification: "B.E",
      email: "raghu@gmail.com",
      designation: "Duty Manager",
    },
    {
      id: "104",
      name: "Anbu",
      dob: "01.07.1994",
      gender: "Female",
      qualification: "B.E",
      email: "anbu@gmail.com",
      designation: "Associate Professor",
    },
  ];

  const [data, setData] = useState(initialDatas);

  const navigate = useNavigate();
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button size="large" color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button
              size="large"
              color="inherit"
              onClick={() => navigate("/add/user")}
            >
              Add user
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
        {/* add user */}
        <Route
          path="/add/user"
          element={<AddUser data={data} setData={setData} />}
        />
        {/* user details */}
        <Route path="/user/:id" element={<User data={data} />} />
        {/* edit user */}
        <Route
          path="/edit/user/:id"
          element={<EditUser data={data} setData={setData} />}
        />
        {/* not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
