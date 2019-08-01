import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';

import Header from '../../slices/Header/Header';
import HeaderOneLine from '../../slices/Header/HeaderOneLine';
import {
  HeaderDesktopUser,
  HeaderDesktopUserLinksContainer,
  UserLinkWrapper
} from '../../slices/Header/HeaderDesktop';
import HeaderMobile from '../../slices/Header/HeaderMobile';

describe('Component: <HeaderOneLine />', () => {
  it('render simple snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter
        initialEntries={['/user/profile', '/user/likes', '/user/logout']}
      >
        <HeaderOneLine
          logo={{
            alt: 'AXA Assistance',
            src:
              'https://prismic-io.s3.amazonaws.com/my-portal%2Fe8a967a6-969c-4b37-9212-42bd49da269a_axa-assistance_redim.png'
          }}
          menu={[
            {
              label: 'Contrats',
              url: 'https://google.com'
            },
            {
              label: 'Salariés',
              url: 'https://google.com'
            },
            {
              label: 'Services',
              url: 'https://google.com'
            }
          ]}
          user={{
            disconnect: { url: '/user/logout', label: 'Se déconnecter' },
            links: [
              { url: '/user/profile', label: 'Mon profil' },
              { url: '/user/likes', label: 'Mes favoris' }
            ]
          }}
        />
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
  });

  it('<HeaderDesktopUser /> display user links', () => {
    const wrapper = shallow(
      <HeaderDesktopUser
        user={{
          disconnect: { url: '/user/logout', label: 'Se déconnecter' },
          links: [{ url: '/user/profile', label: 'Mon profil' }]
        }}
      />
    );

    expect(wrapper.state('isOpen')).toBe(false);
    expect(wrapper.find(<UserLinkWrapper />).exists());
    wrapper.setState({ isOpen: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('<HeaderDesktopUserLinksContainer /> display user links by icon', () => {
    const wrapper = shallow(<HeaderDesktopUserLinksContainer isOpen={true} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('render simple snapshot without user', () => {
    const tree = renderer.create(
      <MemoryRouter
        initialEntries={['/user/profile', '/user/likes', '/user/logout']}
      >
        <HeaderOneLine
          logo={{
            alt: 'AXA Assistance',
            src:
              'https://prismic-io.s3.amazonaws.com/my-portal%2Fe8a967a6-969c-4b37-9212-42bd49da269a_axa-assistance_redim.png'
          }}
          menu={[
            {
              label: 'Contrats',
              url: 'https://google.com'
            },
            {
              label: 'Salariés',
              url: 'https://google.com'
            },
            {
              label: 'Services',
              url: 'https://google.com'
            }
          ]}
        />
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('Component: <Header />', () => {
  it('render snapshot with user', () => {
    const tree = renderer.create(
      <MemoryRouter initialEntries={['/']}>
        <Header
          logo={{
            alt: 'AXA Assistance',
            src:
              'https://prismic-io.s3.amazonaws.com/my-portal%2Fe8a967a6-969c-4b37-9212-42bd49da269a_axa-assistance_redim.png'
          }}
          menu={[
            {
              label: 'Contrats',
              url: 'https://google.com'
            },
            {
              label: 'Salariés',
              url: 'https://google.com'
            },
            {
              label: 'Services',
              url: 'https://google.com'
            }
          ]}
          user={{
            disconnect: { url: '/user/logout', label: 'Se déconnecter' },
            links: [
              { url: '/user/profile', label: 'Mon profil' },
              { url: '/user/likes', label: 'Mes favoris' }
            ]
          }}
        />
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
  });

  it('render snapshot without user', () => {
    const tree = renderer.create(
      <MemoryRouter initialEntries={['/']}>
        <Header
          logo={{
            alt: 'AXA Assistance',
            src:
              'https://prismic-io.s3.amazonaws.com/my-portal%2Fe8a967a6-969c-4b37-9212-42bd49da269a_axa-assistance_redim.png'
          }}
          menu={[
            {
              label: 'Contrats',
              url: 'https://google.com'
            },
            {
              label: 'Salariés',
              url: 'https://google.com'
            },
            {
              label: 'Services',
              url: 'https://google.com'
            }
          ]}
        />
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('Component: <HeaderMobile />', () => {
  it('open the mobile side menu', () => {
    const onMenuClick = jest.fn();
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <HeaderMobile
          logo={{
            alt: 'AXA Assistance',
            src:
              'https://prismic-io.s3.amazonaws.com/my-portal%2Fe8a967a6-969c-4b37-9212-42bd49da269a_axa-assistance_redim.png'
          }}
          menu={[
            {
              label: 'Contrats',
              url: 'https://google.com'
            },
            {
              label: 'Salariés',
              url: 'https://google.com'
            },
            {
              label: 'Services',
              url: 'https://google.com'
            }
          ]}
          onMenuClick={onMenuClick}
        />
      </MemoryRouter>
    );

    wrapper.find('.css-1qkua8e').simulate('click');
    expect(onMenuClick).toBeCalled();
  });
});
