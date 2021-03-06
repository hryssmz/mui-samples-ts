// theme/mediaquery/MediaQuery.tsx
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    backgroundColor: theme.palette.secondary.main,
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: theme.palette.primary.main,
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: green[500],
  },
}));

export default function MediaQuery() {
  return (
    <Root>
      <Typography>{"down(sm): purple"}</Typography>
      <Typography>{"up(md): blue"}</Typography>
      <Typography>{"up(lg): green"}</Typography>
    </Root>
  );
}
