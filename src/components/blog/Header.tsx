// components/blog/Header.tsx
// https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/blog/Header.tsx
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  sections: ReadonlyArray<{ title: string; url: string }>;
  title: string;
}

export default function Header({ sections, title }: Props) {
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map(({ title, url }) => (
          <Link
            color="inherit"
            noWrap
            key={title}
            variant="body2"
            href={url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}
