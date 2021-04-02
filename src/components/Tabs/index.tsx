import { useLocation } from 'react-router-dom';
import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface TabsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  options: Array<{
    id: string;
    title: string;
  }>;
  handleClick(id: string): void;
}

export const Tabs = ({
  options,
  handleClick,
  ...rest
}: TabsProps): JSX.Element => {
  const location = useLocation();

  return (
    <Container>
      {options.map(option => (
        <button
          key={option.id}
          type="button"
          onClick={() => handleClick(option.id)}
          {...(location.pathname === option.id && { className: 'selected' })}
          {...rest}
        >
          {option.title}
        </button>
      ))}
    </Container>
  );
};
