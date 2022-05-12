// system/grid/DisplayGrid.tsx
import Box from "@mui/material/Box";

const sx = {
  p: 1,
  m: 1,
  bgcolor: "primary.main",
  borderRadius: 1,
  color: "white",
};

export default function DisplayGrid() {
  return (
    <Box>
      <Box sx={{ ...sx, display: "grid" }}>{"I'm a grid container!"}</Box>
      <Box sx={{ ...sx, display: "inline-grid" }}>
        {"I'm a inline-grid container!"}
      </Box>
    </Box>
  );
}
