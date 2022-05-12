// system/typography/FontSize.tsx
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function FontSize() {
  return (
    <Typography component="div">
      <Box sx={{ m: 1, fontSize: "default" }}>Default</Box>
      <Box sx={{ m: 1, fontSize: "h6.fontSize" }}>h6.fontSize</Box>
      <Box sx={{ m: 1, fontSize: 16 }}>16px</Box>
    </Typography>
  );
}
