import Navbar from "../../component/Navbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import Paper from "@material-ui/core/Paper";
const Home = () => {
  return (
    <div
      style={
        {
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // background:
          //   "linear-gradient(133deg,rgb(103 58 183 / 100%) 4%,rgb(247 247 247 / 90%) 51%)top center / cover no-repeat",
        }
      }
    >
      <Navbar />
      {/* <h1>Home</h1> */}
      <div
        style={{
          position: "absolute",
          top: "3.5%",
          right: "3%",
          zIndex: "9999",
        }}
      >
        <Typography
          variant="h4"
          noWrap
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AccountCircleRoundedIcon style={{ color: "#fff" }} />
          <Link to="/" style={{ fontSize: "17px", color: "#fff" }}>
            Login
          </Link>
        </Typography>
      </div>
      <div
      // style={{
      //   position:"absolute",

      // }}
      >
        <Paper
          style={{
            width: "450px",
            height: "100%",
            padding: "5%",
            background: "#613ab7",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Please Click Here To Login In Zerodha
        </Paper>
      </div>
    </div>
  );
};
export default Home;
