// system/display/TextOverflow.tsx
import Box from "@mui/material/Box";

const sx = {
  my: 2,
  overflow: "hidden",
  bgcolor: "background.paper",
};

export default function TextOverflow() {
  return (
    <Box component="div" sx={{ whiteSpace: "nowrap", width: 200, mx: "auto" }}>
      <Box component="div" sx={{ ...sx, textOverflow: "clip" }}>
        Text Overflow Clip. Text Overflow Clip.
      </Box>
      <Box component="div" sx={{ ...sx, textOverflow: "ellipsis" }}>
        Text Overflow Ellipsis. Text Overflow Ellipsis.
      </Box>
    </Box>
  );
}
