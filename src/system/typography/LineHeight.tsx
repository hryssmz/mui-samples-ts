// system/typography/LineHeight.tsx
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const sx = {
  m: 1,
  bgcolor: "grey.400",
};

export default function LineHeight() {
  return (
    <Typography component="div">
      <Box sx={{ ...sx, lineHeight: "normal" }}>Normal height.</Box>
      <Box sx={{ ...sx, lineHeight: 2 }}>line-height: 2</Box>
    </Typography>
  );
}
