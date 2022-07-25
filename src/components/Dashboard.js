import { Box, Grid } from "@mui/material";
import Left from "./Left";

function Dashboard() {
  return (
      <Grid container sx={{marginTop: '60px', marginLeft: '-8px', height: '100vh'}}>
        <Grid item xs={2}>
          <Left />
        </Grid>
        <Grid item xs={7}>
          <p>Center</p>
        </Grid>
        <Grid item xs={3}>
          <p>Right</p>
        </Grid>
      </Grid>
  );
};

export default Dashboard;
