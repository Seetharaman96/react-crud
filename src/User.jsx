import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";

export function User({ data }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = data[id];

  return (
    <div>
      <div className="user-details">
        <p>
          <strong>Name</strong>: {user.name}
        </p>
        <p>
          <strong>DOB</strong>: {user.dob}
        </p>
        <p>
          <strong>Gender</strong>: {user.gender}
        </p>
        <p>
          <strong>Qualification</strong>: {user.qualification}
        </p>
        <p>
          <strong>Email</strong>: {user.email}
        </p>
        <p>
          <strong>Designation</strong>: {user.designation}
        </p>
      </div>
      <div className="back-button">
        <Button size="large" variant="contained" onClick={() => navigate(-1)}>
          ⬅Back
        </Button>
      </div>
    </div>
  );
}
