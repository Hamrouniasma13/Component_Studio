import React from 'react';
import renderer from 'react-test-renderer';

import Banner from '../../slices/Banner';

describe('Component: <NavigationBanner />', () => {
  it('render snapshot', () => {
    const tree = renderer.create(
      <Banner
        cover="https://picsum.photos/1920?image=1051"
        category="Travels"
        title="My travels around the world"
        subtitle="I'll explain to you where I go, what I see, and how to do the same"
        action={{
          url: 'https://www.trivago.fr',
          label: 'Check on trivago'
        }}
      />
    );

    expect(tree).toMatchSnapshot();
  });
});
