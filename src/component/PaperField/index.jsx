import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import "./index.css";
export default function PaperPage({ content }) {
  return (
    <Paper className="PaperPage" variant="outlined" elevation={3}>
      {content}
    </Paper>
  );
}
PaperPage.propTypes = {
  content: PropTypes.string,
};
