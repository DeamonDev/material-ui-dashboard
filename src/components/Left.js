import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Left() {
  return (
    <Card sx={{backgroundColor: "#0066ff", paddingLeft: -8, height: '100%'}}>
     <Typography variant="h6">
        Left
      </Typography> 
    </Card>
  );
}

export default Left;
