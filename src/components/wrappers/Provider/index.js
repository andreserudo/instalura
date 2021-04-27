import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import GlobalStyle from '../../../theme/GlobalStyle';

export default function WebsiteGlobalProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

