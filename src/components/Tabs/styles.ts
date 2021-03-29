import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -6rem;

  button {
    box-shadow: 0px 02px 8px #c4c4c4;
    border: 0;
    background: var(--lightBackground);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    font-size: 1.5rem;
    font-weight: normal;
    transition: filter 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }
`;
