import * as React from "react";
import { Search } from "@mui/icons-material";
import { AppBar, Button, InputBase, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const MyButton = styled(Button)`
  background-color: #0d47a1;
  font-weight: bold;
`;

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "start" }}>
        <Typography variant="h6" sx={{ marginRight: "20px" }}>
          DeamonDev
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Search sx={{ marginRight: "2px" }} />
          <InputBase
            placeholder=" search..."
            sx={{
              backgroundColor: "#18b9a5",
              borderRadius: "5px",
              width: "600px",
            }}
          />
        </Box>
        <Box sx={{ width: "75%" }}></Box>
        <MyButton variant="contained" onClick={handleClick} disableRipple={true}>
          sync.io
        </MyButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={handleClose}
            onMouseEnter={(e) => (e.target.style.color = "blue")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          >
            Profile
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            onMouseEnter={(e) => (e.target.style.color = "blue")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          >
            My account
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            onMouseEnter={(e) => (e.target.style.color = "blue")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          >
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
