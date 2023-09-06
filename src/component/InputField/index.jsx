import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import "./index.css";
export default function BasicTextFields({ className, label }) {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      className={className}
    />
  );
}

BasicTextFields.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};
