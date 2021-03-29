import { Tabs } from '../../components/Tabs';
import { Container } from './styles';

export const Dashboard = (): JSX.Element => {
  const options = [
    { id: '1', title: 'Meus Favoritos' },
    { id: '2', title: 'Histórias em Quadrinhos' },
    { id: '3', title: 'Personagens' },
  ];

  return (
    <Container>
      <Tabs options={options} />
    </Container>
  );
};
