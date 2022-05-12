// system/palette/BackgroundColor.tsx
import Box, { BoxProps } from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Cell(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Grid item xs={12} sm={4}>
      <Box sx={{ p: 2, borderRadius: 2, ...sx }} {...other} />
    </Grid>
  );
}

export default function BackgroundColor() {
  return (
    <Grid container spacing={1}>
      <Cell sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}>
        primary.main
      </Cell>
      <Cell sx={{ bgcolor: "secondary.main", color: "secondary.contrastText" }}>
        secondary.main
      </Cell>
      <Cell sx={{ bgcolor: "error.main", color: "error.contrastText" }}>
        error.main
      </Cell>
      <Cell sx={{ bgcolor: "warning.main", color: "warning.contrastText" }}>
        warning.main
      </Cell>
      <Cell sx={{ bgcolor: "info.main", color: "info.contrastText" }}>
        info.main
      </Cell>
      <Cell sx={{ bgcolor: "success.main", color: "success.contrastText" }}>
        success.main
      </Cell>
      <Cell sx={{ bgcolor: "text.primary", color: "background.paper" }}>
        text.primary
      </Cell>
      <Cell sx={{ bgcolor: "text.secondary", color: "background.paper" }}>
        text.secondary
      </Cell>
      <Cell sx={{ bgcolor: "text.disabled", color: "background.color" }}>
        text.disabled
      </Cell>
    </Grid>
  );
}
