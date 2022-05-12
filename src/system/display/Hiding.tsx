// system/display/Hiding.tsx
import Box from "@mui/material/Box";

export default function Hiding() {
  return (
    <Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        hide on screens wider than md
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        hide on screens smaller than md
      </Box>
    </Box>
  );
}
