// system/typography/LetterSpacing.tsx
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function LetterSpacing() {
  return (
    <Typography component="div">
      <Box sx={{ m: 1, letterSpacing: 6 }}>Letter Spacing 6px.</Box>
      <Box sx={{ m: 1, letterSpacing: 10 }}>Letter Spacing 10px.</Box>
    </Typography>
  );
}
