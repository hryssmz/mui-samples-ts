// theme/transitions/TransitionHover.tsx
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import NoSsr from "@mui/material/NoSsr";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
  },
});

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  cursor: "pointer",
  backgroundColor: theme.palette.primary.main,
  transition: theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  }),
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    transform: "scale(1.3)",
  },
}));

export default function TransitionHover() {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <StyledAvatar>OP</StyledAvatar>
      </ThemeProvider>
    </NoSsr>
  );
}
