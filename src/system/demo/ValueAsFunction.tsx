// system/demo/ValueAsFunction.tsx
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";

export default function ValueAsFunction() {
  return (
    <Box
      sx={{
        p: 1,
        border: 1,
        borderColor: (theme: Theme) => theme.palette.primary.main,
      }}
    >
      Border color with theme value.
    </Box>
  );
}
