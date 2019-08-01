import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow, render } from 'enzyme';
import { MemoryRouter } from 'react-router';

import Footer from '../../slices/Footer/Footer';

describe('Component: <Footer />', () => {
  it('render full snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Footer
            langs={[
              {
                ID: 'fr-FR',
                label: 'Français'
              },
              {
                ID: 'en-GB',
                label: 'English'
              }
            ]}
            lang={{
              ID: 'en-GB',
              label: 'English'
            }}
            langTitle={'Languages'}
            links={[
              {
                label: 'More about my first page',
                url: '/my-first-page'
              },
              {
                label: 'Thanks to my friend',
                url: 'https://google.com'
              }
            ]}
            socials={[
              {
                icon: 'facebook',
                url: 'https://facebook.com'
              },
              {
                icon: 'instagram',
                url: 'https://instagram.Com'
              },
              {
                icon: 'twitter',
                url: 'https://twitter.com'
              }
            ]}
            legal={'AXA copycat'}
          />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
