import React from 'react';
import renderer from 'react-test-renderer';

import Container from '../../components/Container';

describe('Component: <Container />', () => {
  it('render snapshot', () => {
    const tree = renderer.create(
      <Container>
        Cupidatat tempor minim qui eiusmod cillum nisi officia sint tempor
        dolor.
      </Container>
    );

    expect(tree).toMatchSnapshot();
  });
});
