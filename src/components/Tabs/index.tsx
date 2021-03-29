import { Container } from './styles';

interface TabsProps {
  options: Array<{
    id: string;
    title: string;
  }>;
}

export const Tabs = ({ options }: TabsProps): JSX.Element => {
  return (
    <Container>
      {options.map(option => (
        <button key={option.id} type="button">
          {option.title}
        </button>
      ))}
    </Container>
  );
};
