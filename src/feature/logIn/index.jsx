import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "./slice";
import { getData } from "./slice";
import Input from "../../component/InputField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "../../component/ButtonField";
import Heading from "../../component/HeadingField";
import "./index.css";
// import LoginImg from "../../assets/login1.svg";
import LoginImg from "../../assets/login3.svg";
const Login = () => {
  const dispatch = useDispatch();
  const prices = useSelector((state) => state.loginSlice.prices.data);
  const loading = useSelector((state) => state.loginSlice.loading);
  useEffect(() => {
    if (!loading) {
      dispatch(getData());
    }
  }, []);

  return (
    <div>
      <div className="background">
        <Grid container>
          <Grid item xs={12} md={8} lg={8} className="leftGrid">
            {/* <h1 className="imageHeading">Hi, Welcome back</h1> */}
            <img src={LoginImg} alt="login image" className="leftImage" />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            {/* <Paper className=""> */}
            <Paper elevation={6} className="loginPaper">
              {/* position: "relative", */}
              <div className="loginField">
                <Heading />
                <Input className="inputPaper" label="Email" />
                <Input className="inputPaper" label="Password" />
                <div className="btnBlockDiv">
                  <Button />
                </div>
              </div>
            </Paper>
            {/* </Paper> */}
            {console.log(prices)}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
