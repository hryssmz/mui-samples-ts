// system/styled/ExperimentalSx.tsx
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      contrastText: "white",
    },
  },
});

const MyThemeComponent = styled("div")(
  sx({
    color: "primary.contrastText",
    backgroundColor: "primary.main",
    padding: 1,
    borderRadius: 1,
  })
);

export default function ExperimentalSx() {
  return (
    <ThemeProvider theme={customTheme}>
      <MyThemeComponent>Styled div with theme</MyThemeComponent>
    </ThemeProvider>
  );
}
