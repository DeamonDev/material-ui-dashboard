import { useTheme } from "@emotion/react";
import Dashboard from "./components/Dashboard";
import { Box, Button, ThemeProvider } from "@mui/material";
import { orange } from "@mui/material/colors";
import { createTheme } from "@mui/system";
import React from "react";
import Navbar from "./components/Navbar";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

function App() {
  return (
    <Box>
      <Navbar />
      <Dashboard />
    </Box>
  );
}

export default App;
