import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#181818',
    primary: {
      main: '#1565c0',
      light: '#5e92f3',
      dark: '#003c8f',
      text: '#fff'
    },
    secondary: {
      main: '#4fc3f7',
      light: '#8bf6ff',
      dark: '#0093c4',
      text: '#000'
    }
  },
  screen: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }
};

const GlobalTheme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>{children}</React.Fragment>
  </ThemeProvider>
);

export default GlobalTheme;
