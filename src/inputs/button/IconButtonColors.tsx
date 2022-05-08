// inputs/button/IconButtonColors.tsx
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Fingerprint from "@mui/icons-material/Fingerprint";

export default function IconButtonColors() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="fingerprint" color="secondary">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="success">
        <Fingerprint />
      </IconButton>
    </Stack>
  );
}
