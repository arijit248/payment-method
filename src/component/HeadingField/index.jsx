import Typography from "@material-ui/core/Typography";
import "./index.css";
export default function Heading() {
  return (
    <div className="headingMain">
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        className="headingblock"
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "50px", fontWeight: 500 }}>Bot</span>
          <span style={{ marginTop: "-12px", fontWeight: 500 }}>Father</span>
        </div>
        <br />
        {/* Please Login Belo */}
      </Typography>
      {/* <Typography
        variant="h3"
        component="h3"
        gutterBottom
        className="headingblock"
      >
        Please Login
      </Typography> */}
    </div>
  );
}
