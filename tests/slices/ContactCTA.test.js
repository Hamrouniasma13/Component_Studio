import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

import ContactCTA from '../../slices/ContactCTA';

describe('Component: <NavigationBanner />', () => {
  it('render snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <ContactCTA
          content="Et velit officia nulla nostrud enim Lorem dolor et laboris ut consectetur."
          link={{
            url: '/',
            label: 'accès au service'
          }}
          image={{
            url:
              'https://prismic-io.s3.amazonaws.com/mini-site%2F2b35a26c-7599-47b4-b962-3eb57379a147_logo.png',
            alt: 'My logo'
          }}
        />
      </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
  });
});
