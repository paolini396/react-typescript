import { MediaCard } from '../../components/MediaCard';
import { Container } from './styles';

export const FavoritesList = (): JSX.Element => {
  return (
    <Container>
      <MediaCard
        id="1"
        title="Batman"
        description="teste"
        imageUrl="https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x720.jpg"
      />
    </Container>
  );
};
