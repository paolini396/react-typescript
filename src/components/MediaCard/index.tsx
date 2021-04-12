import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  FavoriteButton,
} from './styles';

interface MediaCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const MediaCard = ({
  id,
  title,
  description,
  imageUrl,
}: MediaCardProps): JSX.Element => {
  return (
    <Card key={id}>
      <CardActionArea>
        <CardMedia image={imageUrl} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <FavoriteButton isFavorite>Favorito</FavoriteButton>
      </CardActions>
    </Card>
  );
};
