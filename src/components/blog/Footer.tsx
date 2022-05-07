// components/blog/Footer.tsx
// https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/blog/Footer.tsx
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Copyright from "../Copyright";

interface Props {
  description: string;
  title: string;
}

export default function Footer({ description, title }: Props) {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
