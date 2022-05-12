// system/sizing/Width.tsx
import Box from "@mui/material/Box";

const sx = {
  bgcolor: "grey.300",
  my: 1,
};

export default function Width() {
  return (
    <Box sx={{ width: 500, mx: "auto", bgcolor: "primary.main" }}>
      <Box sx={{ ...sx, width: "25%" }}>Width 25%</Box>
      <Box sx={{ ...sx, width: "50%" }}>Width 50%</Box>
      <Box sx={{ ...sx, width: "75%" }}>Width 75%</Box>
      <Box sx={{ ...sx, width: "100%" }}>Width 100%</Box>
      <Box sx={{ ...sx, width: "auto" }}>Width auto</Box>
    </Box>
  );
}
