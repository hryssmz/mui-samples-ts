// system/typography/FontStyle.tsx
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function FontStyle() {
  return (
    <Typography component="div">
      <Box sx={{ m: 1, fontStyle: "normal" }}>Normal font style.</Box>
      <Box sx={{ m: 1, fontStyle: "italic" }}>Italic font style.</Box>
      <Box sx={{ m: 1, fontStyle: "oblique" }}>Oblique font style.</Box>
    </Typography>
  );
}
