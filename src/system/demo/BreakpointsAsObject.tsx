// system/demo/BreakpointsAsObject.tsx
import Box from "@mui/material/Box";

export default function BreakpointsAsObject() {
  return (
    <Box
      sx={{
        width: {
          xs: 100, // theme.breakpoints.up('xs')
          sx: 200, // theme.breakpoints.up('sm')
          md: 300, // theme.breakpoints.up('md')
          lg: 400, // theme.breakpoints.up('lg')
          xl: 500, // theme.breakpoints.up('xl')
        },
      }}
    >
      This box has a responsive width.
    </Box>
  );
}
