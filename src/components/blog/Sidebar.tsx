// components/blog/Sidebar.tsx
// https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/blog/Sidebar.tsx
import { ElementType } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface Props {
  archives: ReadonlyArray<{ url: string; title: string }>;
  description: string;
  social: ReadonlyArray<{ icon: ElementType; name: string }>;
  title: string;
}

export default function Sidebar({
  archives,
  description,
  social,
  title,
}: Props) {
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      {archives.map(({ url, title }) => (
        <Link display="block" variant="body1" href={url} key={title}>
          {title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map(({ icon, name }) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Box component={icon} />
            <span>{name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}
