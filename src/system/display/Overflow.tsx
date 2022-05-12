// system/display/Overflow.tsx
import Box from "@mui/material/Box";

const sx = {
  my: 2,
  bgcolor: "background.paper",
};

export default function Overflow() {
  return (
    <Box sx={{ width: 200, whiteSpace: "nowrap", mx: "auto" }}>
      <Box component="div" sx={{ ...sx, overflow: "hidden" }}>
        Overflow Hidden. Overflow Hidden. Overflow Hidden.
      </Box>
      <Box component="div" sx={{ ...sx, overflow: "auto" }}>
        Overflow Auto. Overflow Auto. Overflow Auto.
      </Box>
    </Box>
  );
}
