import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

// create matcher in order to access to component's style
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';
import { mount, render } from 'enzyme';

import ThemeProvider from '../../components/ThemeProvider';
import Pill from '../../components/Pill';

expect.extend(createMatchers(emotion));

describe('Component: <Pill />', () => {
  it('render label', () => {
    const tree = renderer.create(<Pill large>News</Pill>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('render primary color', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={{ colors: { primary: 'red' } }}>
          <Pill color="primary" small>
            News
          </Pill>
        </ThemeProvider>
      )
      .toJSON();

    expect(tree).toHaveStyleRule('background-color', 'red');
  });

  it('trigger onClick() callback', () => {
    const onPillClick = jest.fn();
    const wrapper = mount(
      <Pill color="primary" onClick={onPillClick} className="my-pill">
        News
      </Pill>
    );
    wrapper.find('span.my-pill').simulate('click');
    expect(onPillClick).toBeCalled();
  });
});
