import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate, useParams } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

export function Home({ data, setData }) {
  const navigate = useNavigate();
  const deleteUser = (idx) => {
    const alterList = data.filter((per) => per.id !== idx);
    setData(alterList);
  };
  return (
    <div>
      <div className="person-details">
        {data.map((data, idx) => (
          <div key={idx} className="person">
            <p>
              <strong>Name</strong>: {data.name}
            </p>
            <p>
              <strong>DOB</strong>: {data.dob}
            </p>
            <p>
              <strong>Gender</strong>: {data.gender}
            </p>
            <p>
              <strong>Qualification</strong>: {data.qualification}
            </p>
            <div className="button">
              <IconButton
                className="info"
                color="primary"
                onClick={() => navigate(`/user/${idx}`)}
              >
                <InfoIcon></InfoIcon>
              </IconButton>
              <IconButton
                variant="contained"
                color="success"
                onClick={() => navigate(`/edit/user/${data.id}`)}
              >
                <EditIcon></EditIcon>
              </IconButton>
              <IconButton
                variant="contained"
                color="error"
                onClick={() => deleteUser(data.id)}
              >
                <DeleteIcon></DeleteIcon>
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
