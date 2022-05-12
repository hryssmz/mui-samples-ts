// system/flexbox/FlexWrap.tsx
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
  mx: "auto",
  my: 1,
  bgcolor: "grey.800",
  maxWidth: 300,
};

export default function FlexWrap() {
  return (
    <Box>
      <Box sx={{ ...sx, flexWrap: "nowrap" }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
        <Item>Item 5</Item>
        <Item>Item 6</Item>
      </Box>
      <Box sx={{ ...sx, flexWrap: "wrap" }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
        <Item>Item 5</Item>
        <Item>Item 6</Item>
      </Box>
      <Box sx={{ ...sx, flexWrap: "wrap-reverse" }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
        <Item>Item 5</Item>
        <Item>Item 6</Item>
      </Box>
    </Box>
  );
}
