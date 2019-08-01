import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router';
import AsideCards from '../../slices/AsideCards';

describe('Component: <NavigationBanner />', () => {
  it('render snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter initialEntries={['/']}>
        <AsideCards
          title="This is a title"
          cards={[
            {
              image: {
                src: 'https://picsum.photos/630/400?image=1084',
                alt: 'animals'
              },
              title: 'Title of the first card',
              text:
                'Elit aute ut amet fugiat incididunt consequat est fugiat. Id consequat mollit nulla adipisicing duis. Cupidatat minim qui in fugiat fugiat elit tempor sit do consectetur. Exercitation commodo aute consequat non deserunt Lorem veniam excepteur id. Veniam ea elit mollit dolore qui reprehenderit consequat esse proident.',
              action: {
                url: 'https://www.google.fr',
                label: 'Discover'
              }
            },
            {
              image: {
                src: 'https://picsum.photos/630/400?image=1076',
                alt: 'building'
              },
              title: 'Title of the second card',
              text:
                'Commodo Lorem dolore est anim. Labore eiusmod veniam fugiat ea. Eiusmod et eu magna do labore. Labore aute dolor qui non ipsum esse occaecat exercitation tempor veniam. Eiusmod enim fugiat culpa incididunt consequat do. Exercitation incididunt tempor sunt duis aute fugiat est ipsum amet occaecat occaecat. Consequat minim reprehenderit exercitation deserunt nostrud cillum qui reprehenderit elit esse veniam et enim.',
              action: {
                url: '/',
                label: 'Back home'
              }
            },
            {
              image: {
                src: 'https://picsum.photos/630/400?image=1062',
                alt: 'warm animal'
              },
              title: 'Title of the third card',
              text:
                'Cupidatat velit reprehenderit mollit consequat. Proident commodo officia sunt laborum pariatur. Cupidatat labore ullamco pariatur minim nostrud non adipisicing sunt consectetur magna aliqua non adipisicing deserunt. Consequat occaecat officia ut ut officia enim deserunt nostrud. Tempor aliqua tempor commodo eiusmod non incididunt velit ad exercitation pariatur irure dolor. Reprehenderit proident est minim consequat sint Lorem reprehenderit sint.'
            }
          ]}
        />
      </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
  });
});
