// system/spacing/HorizontalCentering.tsx
import Box from "@mui/material/Box";

const sx = {
  bgcolor: "primary.main",
  color: "#fff",
  p: 1,
  my: 1,
  borderRadius: 1,
};

export default function HorizontalCentering() {
  return (
    <Box>
      <Box sx={{ ...sx, textAlign: "center", width: 200, mx: "auto" }}>
        Centered element
      </Box>
    </Box>
  );
}
