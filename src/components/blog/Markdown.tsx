// components/blog/Markdown.tsx
// https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/blog/Markdown.tsx
import { ComponentProps } from "react";
import ReactMarkdown, { MarkdownToJSX } from "markdown-to-jsx";
import Box, { BoxProps } from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export function MarkdownListItem(props: BoxProps) {
  return <Box component="li" sx={{ mt: 1, typography: "body1" }} {...props} />;
}

const options: MarkdownToJSX.Options = {
  overrides: {
    h1: {
      component: Typography,
      props: { gutterBottom: true, variant: "h4", component: "h1" },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: "h6", component: "h2" },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "subtitle1" },
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: "caption", paragraph: true },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    li: { component: MarkdownListItem },
  },
};

export default function Markdown(props: ComponentProps<typeof ReactMarkdown>) {
  return <ReactMarkdown options={options} {...props} />;
}
