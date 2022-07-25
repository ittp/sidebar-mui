import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const number = {
  color: "#fff"
};

// Create a theme instance.
const theme = createTheme({
  d: {},
  palette: {
    primary: {
      main: "#232323"
      // main: '#556cd6',
    },
    secondary: {
      main: "#232323"
    },
    error: {
      main: red.A400
    }
  }
});

export default theme;
