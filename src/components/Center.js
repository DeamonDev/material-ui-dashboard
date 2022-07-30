import { Card, Typography } from "@mui/material";

function Center() {
  return (<Card
    sx={{
      backgroundColor: "#0066ff",
      paddingLeft: -8,
      height: "100%",
      display: "flex",
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
        alignSelf: "center"
      }}
    >
      DASHBOARD
    </Typography>
  </Card>);
}

export default Center;
