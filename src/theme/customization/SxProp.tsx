// theme/customization/SxProp.tsx
import Slider from "@mui/material/Slider";

export default function SxProp() {
  return (
    <Slider
      defaultValue={30}
      sx={{
        width: 300,
        color: "success.main",
        "& .MuiSlider-thumb": {
          borderRadius: "1px",
        },
      }}
    />
  );
}
