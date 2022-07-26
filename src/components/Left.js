import { Apps, Home } from "@mui/icons-material";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";

const onMouseOnItem = (e) => {
  console.log(e);
};

function Left() {
  return (
    <Card sx={{ backgroundColor: "#0066ff", paddingLeft: -8, height: "100%", flexDirection: "column" }}>
      <Typography
        variant="h6"
        sx={{ marginLeft: 1, paddingTop: 3, paddingBottom: 3, color: "white", fontWeight: "bold" }}
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
          marginBottom: 1
        }}
        onMouseOver={onMouseOnItem}
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
        }}
        onMouseOver={onMouseOnItem}
      >
        <Apps />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Apps
        </Typography>
      </Card>
    </Card>
  );
}

export default Left;
