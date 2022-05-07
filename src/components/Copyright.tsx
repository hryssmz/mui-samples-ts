// components/Copyright.tsx
// https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/sign-in/SignIn.tsx
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/material/styles";

export interface Props {
  sx?: SxProps;
}

export default function Copyright(props: Props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {` ${new Date().getFullYear()}.`}
    </Typography>
  );
}
