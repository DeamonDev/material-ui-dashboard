import { Apps, ArrowForward, AttachMoney, Home } from "@mui/icons-material";
import { Card, Typography } from "@mui/material";
import { React, Fragment } from "react";

const icons = {
  home: <Home />,
  money: <AttachMoney />,
};

const LeftItem = (props) => {
  return (
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
      {icons[props.icon]}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
        }}
      >
        {props.name}
      </Typography>
    </Card>
  );
};

export default LeftItem;
