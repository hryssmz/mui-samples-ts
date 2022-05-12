// system/sizing/Values.tsx
import Box from "@mui/material/Box";

const sx = {
  bgcolor: "grey.300",
  p: 1,
  my: 0.5,
};

export default function Values() {
  return (
    <Box>
      <Box sx={{ ...sx, width: 1 / 4 }}>Width 1/4</Box>
      <Box sx={{ ...sx, width: 300 }}>Width 300</Box>
      <Box sx={{ ...sx, width: "75%" }}>Width 75%</Box>
      <Box sx={{ ...sx, width: 1 }}>Width 1</Box>
    </Box>
  );
}
