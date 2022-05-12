// system/display/Visibility.tsx
import Box from "@mui/material/Box";

const sx = {
  p: 1,
  m: 1,
  bgcolor: "background.paper",
};

export default function Visibility() {
  return (
    <Box sx={{ bgcolor: "primary.main", p: 1 }}>
      <Box sx={{ ...sx, visibility: "visible" }}>Visibility Visible</Box>
      <Box sx={{ ...sx, visibility: "hidden" }}>Visibility Hidden</Box>
    </Box>
  );
}
