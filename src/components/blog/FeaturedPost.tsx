// components/blog/FeaturedPost.tsx
// https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/blog/FeaturedPost.tsx
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface Props {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
}

export default function FeaturedPost({ post }: Props) {
  const { date, description, image, imageLabel, title } = post;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={image}
            alt={imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
