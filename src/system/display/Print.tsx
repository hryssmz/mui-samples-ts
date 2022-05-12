// system/display/Print.tsx
import Box from "@mui/material/Box";

export default function Print() {
  return (
    <Box>
      <Box sx={{ display: "block", displayPrint: "none" }}>
        Screen Only (Hide on print only)
      </Box>
      <Box sx={{ display: "none", displayPrint: "block" }}>
        Print Only (Hide on screen only)
      </Box>
    </Box>
  );
}
