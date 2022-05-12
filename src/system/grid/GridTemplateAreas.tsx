// system/grid/GridTemplateAreas.tsx
import Box from "@mui/material/Box";

const sx = {
  p: 1,
  borderRadius: 1,
};

export default function GridTemplateAreas() {
  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `
            "header header header header"
            "main main . sidebar"
            "footer footer footer footer"
          `,
        }}
      >
        <Box sx={{ ...sx, gridArea: "header", bgcolor: "primary.main" }}>
          Header
        </Box>
        <Box sx={{ ...sx, gridArea: "main", bgcolor: "secondary.main" }}>
          Main
        </Box>
        <Box sx={{ ...sx, gridArea: "sidebar", bgcolor: "info.main" }}>
          Sidebar
        </Box>
        <Box sx={{ ...sx, gridArea: "footer", bgcolor: "warning.main" }}>
          Footer
        </Box>
      </Box>
    </Box>
  );
}
