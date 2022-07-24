import { useTheme } from "@emotion/react";
import { Button, ThemeProvider } from "@mui/material";
import { orange } from "@mui/material/colors";
import { createTheme } from "@mui/system";
import Navbar from "./components/Navbar";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

function App() {

  return (
    <Navbar />
  )
}

export default App;
