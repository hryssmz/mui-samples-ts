// system/typography/FontWeight.tsx
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function FontWeight() {
  return (
    <Typography component="div">
      <Box sx={{ m: 1, fontWeight: "light" }}>Light</Box>
      <Box sx={{ m: 1, fontWeight: "regular" }}>Regular</Box>
      <Box sx={{ m: 1, fontWeight: "medium" }}>Medium</Box>
      <Box sx={{ m: 1, fontWeight: 500 }}>500</Box>
      <Box sx={{ m: 1, fontWeight: "bold" }}>Bold</Box>
    </Typography>
  );
}
