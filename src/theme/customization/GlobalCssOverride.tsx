// theme/customization/GlobalCssOverride.tsx
import GlobalStyles from "@mui/material/GlobalStyles";

const CustomGlobalStyles = <GlobalStyles styles={{ h1: { color: "red" } }} />;

export default function GlobalCssOverride() {
  return (
    <>
      {CustomGlobalStyles}
      <h1>Red h1 element</h1>
    </>
  );
}
