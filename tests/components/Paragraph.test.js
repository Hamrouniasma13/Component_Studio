import React from 'react';
import renderer from 'react-test-renderer';

import Paragraph from '../../components/Paragraph';

const loremLine =
  'Sint minim consequat velit irure consectetur eu non consectetur aute deserunt labore velit aliqua mollit.';

describe('Component: <Paragraph />', () => {
  it('render <p/> with simple text', () => {
    const tree = renderer.create(<Paragraph content={loremLine} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('render <div />', () => {
    const tree = renderer
      .create(<Paragraph tag="div" content={loremLine} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('render react component', () => {
    const tree = renderer
      .create(
        <Paragraph
          content={
            <>
              <h1>{loremLine}</h1>
            </>
          }
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
