// system/flexbox/JustifyContent.tsx
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
};

export default function JustifyContent() {
  return (
    <Box>
      <Box sx={{ ...sx, justifyContent: "flex-start" }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
      <Box sx={{ ...sx, justifyContent: "flex-end" }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
      <Box sx={{ ...sx, justifyContent: "center" }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
      <Box sx={{ ...sx, justifyContent: "space-between" }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
      <Box sx={{ ...sx, justifyContent: "space-around" }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
      <Box sx={{ ...sx, justifyContent: "space-evenly" }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
    </Box>
  );
}
