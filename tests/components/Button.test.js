import React from 'react';
import renderer from 'react-test-renderer';

// wrapper to make our components work with <Link />
import { MemoryRouter } from 'react-router';

// create matcher in order to access to component's style
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import Button from '../../components/Button';

expect.extend(createMatchers(emotion));

describe('Component: <Button />', () => {
  it('render label', () => {
    const tree = renderer.create(<Button>See more</Button>);
    expect(tree).toMatchSnapshot();
  });

  it('render with "href"', () => {
    const tree = renderer.create(
      <MemoryRouter initialEntries={['/']}>
        <Button href="/">See more</Button>
      </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
  });

  it('render with "href" + "icon"', () => {
    const tree = renderer.create(
      <MemoryRouter initialEntries={['/']}>
        <Button href="/" icon="close">
          See more
        </Button>
      </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
  });

  it('render with no action button', () => {
    const tree = renderer.create(<Button icon="close">See more</Button>);

    expect(tree).toMatchSnapshot();
  });
});
