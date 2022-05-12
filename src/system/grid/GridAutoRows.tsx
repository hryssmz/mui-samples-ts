// system/grid/GridAutoRows.tsx
import Box, { BoxProps } from "@mui/material/Box";

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        p: 1,
        borderRadius: 1,
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

export default function GridAutoColumns() {
  return (
    <Box>
      <Box sx={{ display: "grid", gridAutoRows: "40px", gap: 1 }}>
        <Item sx={{ gridColumn: "1", gridRow: "span 2" }}>span 2</Item>
        {/* The second non-visible row has height of 40px */}
        <Item sx={{ gridColumn: "1", gridRow: "4 / 5" }}>4 / 5</Item>
      </Box>
    </Box>
  );
}
