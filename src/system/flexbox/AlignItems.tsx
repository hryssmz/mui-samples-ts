// system/flexbox/AlignItems.tsx
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

const sx = {
  display: "flex",
  p: 1,
  m: 1,
  bgcolor: "grey.800",
  height: 100,
};

export default function AlignItems() {
  return (
    <Box>
      <Box sx={{ ...sx, alignItems: "flex-start" }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
      <Box sx={{ ...sx, alignItems: "flex-end" }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
      <Box sx={{ ...sx, alignItems: "center" }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
      <Box sx={{ ...sx, alignItems: "stretch" }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
      <Box sx={{ ...sx, alignItems: "baseline", height: 116 }}>
        <Item sx={{ height: 64 }}>Item 1</Item>
        <Item sx={{ height: 84 }}>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
    </Box>
  );
}
