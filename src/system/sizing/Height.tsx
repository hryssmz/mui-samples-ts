// system/sizing/Height.tsx
import Box from "@mui/material/Box";

const sx = {
  bgcolor: "grey.300",
  mx: 1,
  width: 120,
  display: "inline-block",
};

export default function Height() {
  return (
    <Box sx={{ height: 100, bgcolor: "primary.main" }}>
      <Box sx={{ ...sx, height: "25%" }}>Height 25%</Box>
      <Box sx={{ ...sx, height: "50%" }}>Height 50%</Box>
      <Box sx={{ ...sx, height: "75%" }}>Height 75%</Box>
      <Box sx={{ ...sx, height: "100%" }}>Height 100%</Box>
    </Box>
  );
}
