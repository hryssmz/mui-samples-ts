// system/display/Inline.tsx
import Box from "@mui/material/Box";

const sx = {
  p: 1,
  m: 1,
  bgcolor: "primary.main",
};

export default function Inline() {
  return (
    <Box>
      <Box sx={{ ...sx, display: "inline" }}>inline</Box>
      <Box sx={{ ...sx, display: "inline" }}>inline</Box>
    </Box>
  );
}
