import React from 'react';
import renderer from 'react-test-renderer';

import TabsContent from '../../slices/TabsContent';

describe('Component: <TabsContent />', () => {
  it('snapshot', () => {
    const tree = renderer.create(
      <TabsContent
        items={[
          {
            title: "Se connecter à l'espace client",
            content: '1Ex eiusmod id consequat laborum.'
          },
          {
            title: 'Mon identifiant de connexion',
            content:
              '2Reprehenderit irure eiusmod duis sint officia proident elit.'
          },
          {
            title: 'Code confidentielle',
            content:
              '3Laboris labore nisi nostrud enim commodo ad consequat sit ullamco ex velit occaecat pariatur.'
          }
        ]}
      />
    );

    expect(tree).toMatchSnapshot();
  });
});
