// components/dashboard/Title.tsx
// https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/dashboard/Title.tsx
import { ReactNode } from "react";
import Typography from "@mui/material/Typography";

export interface Props {
  children?: ReactNode;
}

export default function Title(props: Props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}
