import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

import { ThemeProvider } from 'component-studio';

import theme from '../../theme';

export function renderWithTheme(component) {
  return renderer.create(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  );
}

export function renderWithThemeRouter(props, component) {
  return renderer.create(
    <ThemeProvider theme={theme}>
      <MemoryRouter {...props}>{component}</MemoryRouter>
    </ThemeProvider>
  );
}
