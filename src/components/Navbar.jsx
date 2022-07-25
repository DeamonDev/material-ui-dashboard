import { Search } from "@mui/icons-material";
import { AppBar, InputBase, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Navbar() {
  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "start" }}>
        <Typography variant="h6" sx={{ marginRight: "20px" }}>
          DeamonDev
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Search sx={{ marginRight: "2px" }} />
          <InputBase
            placeholder="search..."
            sx={{
              backgroundColor: "#18b9a5",
              fullWidth: true,
              borderRadius: "5px",
            }}
          />
        </Box>
        <Box sx={{width: "75%"}}></Box>
        <Typography variant="h6">sync.io</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
