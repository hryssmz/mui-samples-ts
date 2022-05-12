// system/flexbox/FlexDirection.tsx
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
  alignItems: "flex-start",
  p: 1,
  m: 1,
  bgcolor: "grey.800",
};

export default function FlexDirection() {
  return (
    <Box>
      <Box sx={{ ...sx, flexDirection: "row" }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
      <Box sx={{ ...sx, flexDirection: "row-reverse" }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
      <Box sx={{ ...sx, flexDirection: "column" }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
      <Box sx={{ ...sx, flexDirection: "column-reverse" }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
    </Box>
  );
}
