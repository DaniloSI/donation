import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
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
