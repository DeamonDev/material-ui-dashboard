import { Apps, ArrowBackIos, ArrowForward, Home } from "@mui/icons-material";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LeftItem from './LeftItem';

const onMouseOnItem = (e) => {
  console.log(e);
};

const icons = {
  home: Home,
  apps: Apps,
  arrows: ArrowForward,
};

function Left() {
  return (
    <Card
      sx={{
        backgroundColor: "#0066ff",
        paddingLeft: -8,
        height: "100%",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginLeft: 1,
          paddingTop: 3,
          paddingBottom: 3,
          color: "white",
          fontWeight: "bold",
        }}
      >
        Home
      </Typography>
      <Card
        sx={{
          display: "flex",
          justifyContent: "start",
          gap: 2,
          alignItems: "center",
          backgroundColor: "#0099cc",
          color: "white",
          marginBottom: 1,
          "&:hover": {
            backgroundColor: "green",
          },
        }}
      >
        <Home />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Dashboard
        </Typography>
      </Card>
      <Card
        sx={{
          display: "flex",
          justifyContent: "start",
          gap: 2,
          alignItems: "center",
          backgroundColor: "#0099cc",
          color: "white",
          marginBottom: 1,
          "&:hover": {
            backgroundColor: "green",
          },
        }}
      >
        <Apps />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Apps
        </Typography>
      </Card>
      <Card
        sx={{
          display: "flex",
          justifyContent: "start",
          gap: 2,
          alignItems: "center",
          backgroundColor: "#0099cc",
          marginBottom: 1,
          color: "white",
          "&:hover": {
            backgroundColor: "green",
          },
        }}
      >
        <ArrowForward />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          iOS
        </Typography>
      </Card>
      <LeftItem name="Bills" icon="money"/>
    </Card>
  );
}

export default Left;
