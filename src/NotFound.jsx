import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h1>404, not found</h1>
      <img
        className="not-found-image"
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"
        alt="404 not found"
      />
      <Button
        className="not-found-button"
        size="large"
        variant="contained"
        onClick={() => navigate("/")}
      >
        Go back to home page
      </Button>
    </div>
  );
}
