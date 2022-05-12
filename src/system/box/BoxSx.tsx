// system/box/BoxSx.tsx
import { Box, ThemeProvider } from "@mui/system";

const theme = {
  palette: {
    primary: {
      main: "#00cc44",
      dark: "#00802b",
    },
  },
};

const sx = {
  width: 300,
  height: 300,
  bgcolor: "primary.dark",
  "&:hover": {
    backgroundColor: "primary.main",
    opacity: [0.9, 0.8, 0.7],
  },
};

export default function BoxSx() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ ...sx }} />
    </ThemeProvider>
  );
}
