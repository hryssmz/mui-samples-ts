// system/shadows/BoxShadow.tsx
import Box, { BoxProps } from "@mui/material/Box";

function Item(props: BoxProps) {
  const { sx, ...others } = props;
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        m: 1,
        px: 1,
        py: 3,
        borderRadius: 1,
        textAlign: "center",
        ...sx,
      }}
      {...others}
    />
  );
}

export default function BoxShadow() {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
      {Array(25)
        .fill(0)
        .map((_, i) => (
          <Item key={i} sx={{ boxShadow: i }}>
            {i}
          </Item>
        ))}
    </Box>
  );
}
