import React from 'react';
import renderer from 'react-test-renderer';

import Heading from '../../components/Heading';

const loremTitle = 'Magna cillum consectetur.';
describe('Component: <Heading />', () => {
  it('render <h1>', () => {
    const tree = renderer.create(<Heading title={loremTitle} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
