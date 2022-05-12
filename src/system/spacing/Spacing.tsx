// system/spacing/Spacing.tsx
import Box from "@mui/material/Box";

export default function Spacing() {
  return (
    <Box sx={{ width: 400, mx: "auto", bgcolor: "grey.500", p: 1 }}>
      <Box sx={{ bgcolor: "primary.main", p: 1 }}>p: 1</Box>
      <Box sx={{ bgcolor: "primary.main", m: 1 }}>m: 1</Box>
      <Box sx={{ bgcolor: "primary.main", p: 1 }}>p: 2</Box>
    </Box>
  );
}
