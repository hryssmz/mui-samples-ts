// system/display/WhiteSpace.tsx
import Box from "@mui/material/Box";

const sx = {
  my: 2,
  bgcolor: "primary.main",
};

export default function WhiteSpace() {
  return (
    <Box sx={{ width: 200, mx: "auto" }}>
      <Box component="div" sx={{ ...sx, whiteSpace: "nowrap" }}>
        White Space Nowrap. White Space Nowrap.
      </Box>
      <Box component="div" sx={{ ...sx, whiteSpace: "normal" }}>
        White Space Normal. White Space Normal.
      </Box>
    </Box>
  );
}
