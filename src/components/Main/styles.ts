import styled from 'styled-components';

export const Wrapper = styled.main`
  height: calc(100vh - 81.5px);
  overflow-y: scroll;
  padding: 8px;
  background-color: #ebebeb;
`;

// TODO: Armazenar tamanhos de telas em forma de tokens ou outra forma melhor
// TODO: Usar o esquema de container. Avaliar usar um lib UI.
export const GridItems = styled.div`
  display: grid;
  grid-template-columns: auto;
  @media (min-width: ${(props) => props.theme.screen.mobileM}) {
    grid-template-columns: repeat(2, auto);
  }
  @media (min-width: ${(props) => props.theme.screen.tablet}) {
    grid-template-columns: repeat(3, auto);
  }
  @media (min-width: ${(props) => props.theme.screen.laptop}) {
    grid-template-columns: repeat(4, auto);
  }
  @media (min-width: ${(props) => props.theme.screen.laptopL}) {
    grid-template-columns: repeat(5, auto);
  }
  @media (min-width: ${(props) => props.theme.screen.desktop}) {
    grid-template-columns: repeat(6, auto);
  }
  grid-gap: 8px;
`;
