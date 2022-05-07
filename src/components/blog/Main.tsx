// components/blog/Main.tsx
// https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/blog/Main.tsx
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Markdown from "./Markdown";

interface Props {
  posts: ReadonlyArray<string>;
  title: string;
}

export default function Main({ posts, title }: Props) {
  return (
    <Grid item xs={12} md={8} sx={{ "& .markdown": { py: 3 } }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post, i) => (
        <Markdown className="markdown" key={i}>
          {post}
        </Markdown>
      ))}
    </Grid>
  );
}
