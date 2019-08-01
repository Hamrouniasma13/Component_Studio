import React from 'react';
import renderer from 'react-test-renderer';

import NavigationBanner from '../../slices/NavigationBanner';

describe('Component: <NavigationBanner />', () => {
  it('render snapshot', () => {
    const tree = renderer.create(
      <NavigationBanner
        title="Hello Anna, nice to meet you"
        backgroundColor="#00adc6"
        arrowDotsColor="white"
        action={<a href="/">Click me to scroll</a>}
        cards={[
          {
            image: {
              src: 'https://picsum.photos/260/130/?image=1082',
              alt: 'piano'
            },
            target: 'http://www.google.com',
            title: 'Take musique lesson with a professionnal'
          },
          {
            image: {
              src: 'https://picsum.photos/260/130/?image=1080',
              alt: 'strawberries'
            },
            target: 'http://www.google.com',
            title: 'Cooking lesson, 1st is free'
          },
          {
            image: {
              src: 'https://picsum.photos/260/130/?image=974',
              alt: 'univers'
            },
            target: 'http://www.google.com',
            title: 'Join passionate of astronomy, like you'
          },
          {
            image: {
              src: 'https://picsum.photos/260/130/?image=973',
              alt: 'ocean'
            },
            target: 'http://www.google.com',
            title: 'You like travelling ? Meet people like you'
          },
          {
            image: {
              src: 'https://picsum.photos/260/130/?image=949',
              alt: 'building'
            },
            target: 'http://www.google.com',
            title: 'This architecte is famous. Learn why'
          },
          {
            image: {
              src: 'https://picsum.photos/260/130/?image=935',
              alt: 'frooooogs'
            },
            target: 'http://www.google.com',
            title: 'Frogs are our friends. Love them'
          }
        ]}
      />
    );

    expect(tree).toMatchSnapshot();
  });
});
