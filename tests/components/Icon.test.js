import React from 'react';
import renderer from 'react-test-renderer';

import theme from '../../theme';
import ThemeProvider from '../../components/ThemeProvider';

import Icon from '../../components/Icon';

describe('Component: <Icon />', () => {
  it('renders default color', () => {
    const tree = renderer.create(<Icon size="50" name="youtube" />);

    expect(tree).toMatchSnapshot();
  });

  it('use theme colors', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Icon size="50" name="youtube" color="primary" />
      </ThemeProvider>
    );
    expect(tree).toMatchSnapshot();
  });
});
