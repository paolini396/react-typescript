import styled from 'styled-components';

export const Container = styled.div`
  background: var(--lightTextColor);
`;

export const Content = styled.div`
  width: 1120px;
  margin: 0 auto;
  padding: 1rem 1rem 8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 0;
    padding: 20px;
    border-radius: 8px;
    background: var(--lightSecondaryColor);
    transition: background-color 0.2s;
    transition: filter 0.2s;

    svg {
      color: #fff;
      cursor: pointer;
    }
    :hover {
      filter: brightness(0.9);
    }
  }
`;

export const ContentLogo = styled.div`
  img {
    width: 120px;
    height: 50px;
  }
  strong {
    color: var(--lightTextColorSecondary);
    font-size: 16px;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: #da5221;
  }
`;
