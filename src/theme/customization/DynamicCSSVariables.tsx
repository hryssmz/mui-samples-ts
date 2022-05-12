// theme/customization/DynamicCSSVariables.tsx
import { useState, ChangeEvent, CSSProperties } from "react";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const CustomSlider = styled(Slider)({
  width: 300,
  color: "var(--color)",
  "& .MuiSlider-thumb": {
    [`&:hover, &.Mui-focusVisible`]: {
      bowShadow: `0px 0px 0px 8px var(--box-shadow)`,
    },
    [`&.Mui-active`]: {
      boxShadow: `0px 0px 0px 14px var(--box-shadow)`,
    },
  },
});

const successVars = {
  "--color": "#4caf50",
  "--box-shadow": "rgb(76, 175, 80, .16)",
} as CSSProperties;

const defaultVars = {
  "--color": "#1976d2",
  "--box-shadow": "rgb(25, 118, 210, .16)",
} as CSSProperties;

export default function DynamicCSSVariables() {
  const [vars, setVars] = useState<CSSProperties>(defaultVars);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVars(event.target.checked ? successVars : defaultVars);
  };

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            checked={vars === successVars}
            onChange={handleChange}
            color="primary"
            value="dynamic-class-name"
          />
        }
        label="Success"
      />
      <CustomSlider style={vars} defaultValue={30} sx={{ mt: 1 }} />
    </>
  );
}
