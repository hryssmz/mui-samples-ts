// utils/useMediaQuery/SimpleMediaQuery.tsx
import useMediaQuery from "@mui/material/useMediaQuery";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width: 600px)");

  return <span>(min-width: 600px) matches: {String(matches)}</span>;
}
