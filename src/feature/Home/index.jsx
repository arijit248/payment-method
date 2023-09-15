import Grid from "@material-ui/core/Grid";
import ClickTiles from "../../component/ClickTiles";
import "../common.css";

const Home = () => {
  return (
    <div className="commonStyles">
      <Grid container spacing={4}>
        <Grid item xs={12} lg={3} xl={3} md={6}>
          <ClickTiles title="Zerodha" />
        </Grid>
        <Grid item xs={12} lg={3} xl={3} md={6}>
          <ClickTiles title="5 Paisa" />
        </Grid>
        <Grid item xs={12} lg={3} xl={3} md={6}>
          <ClickTiles title="ICICI" />
        </Grid>
        <Grid item xs={12} lg={3} xl={3} md={6}>
          <ClickTiles title="First Stock" />
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
