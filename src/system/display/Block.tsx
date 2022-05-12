// system/display/Block.tsx
import Box from "@mui/material/Box";

const sx = {
  p: 1,
  m: 1,
  bgcolor: "primary.main",
};

export default function Block() {
  return (
    <Box>
      <Box component="span" sx={{ ...sx, display: "block" }}>
        block
      </Box>
      <Box component="span" sx={{ ...sx, display: "block" }}>
        block
      </Box>
    </Box>
  );
}
