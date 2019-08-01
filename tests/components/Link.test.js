import React from 'react';
import renderer from 'react-test-renderer';

// wrapper to make our components work with <Link />
import { MemoryRouter } from 'react-router';

import { render, mount, shallow } from 'enzyme';

import Link from '../../components/Link';

describe('Component: <Link />', () => {
  it('render snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/']}>
          <Link href="/">View More</Link>
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('href to external url', () => {
    const wrapper = render(<Link href="http://google.com">Go to google</Link>);

    expect(wrapper.attr('href')).toBe('http://google.com');
  });

  it('trigger onClick() callback', () => {
    const onButtonClick = jest.fn();
    const wrapper = mount(
      <Link className="my-link" onClick={onButtonClick}>
        Open a new page
      </Link>
    );
    // console.log('wrapper: ', wrapper.debug());

    wrapper.find('a.my-link').simulate('click');

    expect(onButtonClick).toBeCalled();
  });

  it('render with "to" object', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Link
          href={{
            path: '/login',
            search: '?utm=your+face',
            state: { referrer: 'about-us' }
          }}
        />
      </MemoryRouter>
    );
    expect(tree).toMatchSnapshot();
  });
});
