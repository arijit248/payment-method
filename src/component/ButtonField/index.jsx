import Button from "@material-ui/core/Button";
import "./index.css";

export default function ContainedButtons() {
  return (
    <div className="btnContainer">
      <Button variant="contained" color="secondary" className="btnBlock">
        Login
      </Button>
    </div>
  );
}
