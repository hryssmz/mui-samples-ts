// system/typography/FontFamily.tsx
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function FontFamily() {
  return (
    <Typography component="div">
      <Box sx={{ m: 1, fontFamily: "default" }}>Default</Box>
      <Box sx={{ m: 1, fontFamily: "Monospace", fontSize: "h6.fontSize" }}>
        Monospace
      </Box>
    </Typography>
  );
}
