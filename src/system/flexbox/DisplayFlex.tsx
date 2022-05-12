// system/flexbox/DisplayFlex.tsx
import Box from "@mui/material/Box";

const sx = {
  p: 1,
  m: 1,
  bgcolor: "primary.main",
};

export default function DisplayFlex() {
  return (
    <Box>
      <Box sx={{ ...sx, display: "flex" }}>
        {"I'm a flexbox container that uses flex!"}
      </Box>
      <Box sx={{ ...sx, display: "inline-flex" }}>
        {"I'm a flexbox container that uses inline-flex!"}
      </Box>
    </Box>
  );
}
