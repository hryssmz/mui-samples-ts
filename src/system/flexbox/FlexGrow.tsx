// system/flexbox/FlexGrow.tsx
import Box, { BoxProps } from "@mui/material/Box";

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        p: 1,
        m: 1,
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

export default function FlexGrow() {
  return (
    <Box>
      <Box sx={{ display: "flex", p: 1, bgcolor: "grey.800" }}>
        <Item sx={{ flexGrow: 1 }}>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
    </Box>
  );
}
