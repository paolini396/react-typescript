// import { Link } from 'react-router-dom';

import Logo from '../../assets/hero.png';
import { Container, Content, ContentLogo, Profile } from './styles';

interface HeaderProps {
  children: JSX.Element;
}

export const Header = ({ children }: HeaderProps): JSX.Element => {
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
            {/* <FiPower /> */}
            sair
          </button>
        </Content>
      </Container>
      {children}
    </>
  );
};
