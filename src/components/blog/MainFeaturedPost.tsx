// components/blog/MainFeaturedPost.tsx
// https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/blog/MainFeaturedPost.tsx
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

interface Props {
  post: {
    description: string;
    image: string;
    imageText: string;
    linkText: string;
    title: string;
  };
}

export default function MainFeaturedPost({ post }: Props) {
  const { description, image, imageText, linkText, title } = post;

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={image} alt={imageText} />}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{ position: "relative", p: { xs: 3, md: 6 }, pr: { md: 0 } }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {description}
            </Typography>
            <Link variant="subtitle1" href="#">
              {linkText}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
