// system/flexbox/AlignSelf.tsx
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

export default function AlignSelf() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          p: 1,
          m: 1,
          bgcolor: "grey.800",
          height: 124,
        }}
      >
        <Item>Item 1</Item>
        <Item sx={{ alignSelf: "flex-end" }}>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
    </Box>
  );
}
