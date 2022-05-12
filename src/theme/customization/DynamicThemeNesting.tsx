// theme/customization/DynamicThemeNesting.tsx
import { useState, useMemo, ChangeEvent } from "react";
import Slider from "@mui/material/Slider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import { green } from "@mui/material/colors";
import Switch from "@mui/material/Switch";

export default function DynamicThemeNesting() {
  const [success, setSuccess] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSuccess(event.target.checked);
  };

  const theme = useMemo(() => {
    return success
      ? createTheme({
          palette: {
            primary: {
              light: green[300],
              main: green[500],
              dark: green[700],
            },
          },
        })
      : createTheme();
  }, [success]);

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            checked={success}
            onChange={handleChange}
            color="primary"
            value="dynamic-class-name"
          />
        }
        label="Success"
      />
      <ThemeProvider theme={theme}>
        <Slider defaultValue={30} sx={{ width: 300, mt: 1 }} />
      </ThemeProvider>
    </>
  );
}
