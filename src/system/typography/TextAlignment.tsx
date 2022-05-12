// system/typography/TextAlignment.tsx
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function TextAlignment() {
  return (
    <Typography component="div" sx={{ bgcolor: "grey.300" }}>
      <Box sx={{ m: 1, textAlign: "justify" }}>
        Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit
        amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
      </Box>
      <Box sx={{ m: 1, textAlign: "left" }}>Left aligned text.</Box>
      <Box sx={{ m: 1, textAlign: "center" }}>Center aligned text.</Box>
      <Box sx={{ m: 1, textAlign: "right" }}>Right aligned text.</Box>
    </Typography>
  );
}
