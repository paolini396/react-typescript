import { useHistory } from 'react-router-dom';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import { Tabs } from '../Tabs';
import Logo from '../../assets/hero.png';
import {
  Container,
  Content,
  ContentLogo,
  Profile,
  ChildrenContent,
} from './styles';

interface HeaderProps {
  children: JSX.Element;
}

export const Header = ({ children }: HeaderProps): JSX.Element => {
  const history = useHistory();

  const options = [
    { id: '/dashboard', title: 'Meus Favoritos' },
    { id: '/comics', title: 'Histórias em Quadrinhos' },
    { id: '/characters', title: 'Personagens' },
  ];

  const handleSelectedTab = (id: string) => {
    history.push(id);
  };

  async function handleSingOut() {
    console.log('sair');
  }

  return (
    <>
      <Container>
        <Content>
          <ContentLogo>
            {/* <Link to="/dashboard"> */}
            <img src={Logo} alt="Hero" />
            {/* </Link> */}
            <Profile>
              <strong>Seja bem vindo,</strong>
              {/* <Link to="/profile">{user?.name}</Link> */}
            </Profile>
          </ContentLogo>

          <button type="button" onClick={handleSingOut}>
            <PowerSettingsNewIcon />
          </button>
        </Content>
      </Container>
      <ChildrenContent>
        <Tabs options={options} handleClick={handleSelectedTab} />
        {children}
      </ChildrenContent>
    </>
  );
};
