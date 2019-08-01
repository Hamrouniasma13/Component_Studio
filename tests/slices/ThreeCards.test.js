import React from 'react';
import renderer from 'react-test-renderer';

import ThreeCards from '../../slices/ThreeCards';

describe('Component: <ThreeCards />', () => {
  it('render snapshot', () => {
    const tree = renderer
      .create(
        <ThreeCards
          title="My Cards"
          cards={[
            {
              image: {
                src:
                  'http://eb-employee-fr.cdn.prismic.io/eb-employee-fr%2Fcd8d94f6-734c-404f-ad4a-ae88117144ff_e.svg',
                alt: 'My Easy Sante'
              },
              title: 'My Easy Sante',
              text:
                'Pour préserver et améliorer sa santé au quotidien avec My Easy Santé. C’est utile et efficace !',
              action: {
                url: 'https://fr.wikipedia.org/wiki/Pyramides_de_Gizeh',
                label: 'Découvrir'
              }
            },
            {
              image: {
                src:
                  'http://eb-employee-fr.cdn.prismic.io/eb-employee-fr%2Fc50bf496-be89-46d3-ad0d-f72f4b5679fd_f.svg',
                alt: 'Appeler un médecin 24/7'
              },
              title: 'Appeler un médecin 24/7',
              text:
                "3633 pour consulter immédiatement un médecin par téléphone (prix d'un appel local) ou par vidéo (+33 1 55 92 27 54 depuis l'étranger)."
            },
            {
              image: {
                src:
                  'http://eb-employee-fr.cdn.prismic.io/eb-employee-fr%2F445e7e8d-89cd-4d51-8c1e-cac8ae3d07e2_g.svg',
                alt: 'Accéder au réseau de 6000 professionnels Santé Itelis'
              },
              title: 'Accéder au réseau de 6000 professionnels Santé Itelis',
              text:
                '6 000 professionnels de la santé Itelis conseillent et facilitent l’accès aux soins à plus de 10 millions de personnes.(opticiens, dentistes, audioprothésistes...)',
              action: {
                url: 'http://www.chateau-amboise.com/',
                label: 'Découvrir'
              }
            }
          ]}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  // it('render simpliest ThreeCards', () => {
  //   const tree = renderer
  //     .create(
  //       <ThreeCards
  //         cards={[
  //           {
  //             image: {
  //               url: 'https://picsum.photos/546/970?image=670',
  //               alt: 'Achitechture',
  //               dimensions: { width: 238, height: 380 }
  //             },
  //             title: 'Médecine et soins courants'
  //           },
  //           {
  //             image: {
  //               url: 'https://picsum.photos/546/970?image=903',
  //               alt: 'Achitechture',
  //               dimensions: { width: 238, height: 380 },
  //               mobile: {
  //                 alt: 'architecture',
  //                 url: 'https://picsum.photos/546/307?image=903',
  //                 dimensions: { width: 546, height: 307 }
  //               },
  //               tablet: {
  //                 alt: 'architecture',
  //                 url: 'https://picsum.photos/737/415?image=903',
  //                 dimensions: { width: 737, height: 415 }
  //               },
  //               desktop: {
  //                 alt: 'architecture',
  //                 url: 'https://picsum.photos/238/380?image=903',
  //                 dimensions: { width: 238, height: 380 }
  //               }
  //             },
  //             links: [
  //               {
  //                 url: 'https://fr.wikipedia.org/wiki/Pyramides_de_Gizeh',
  //                 label: 'En savoir plus'
  //               },
  //               {
  //                 url: 'https://fr.wikipedia.org/wiki/Pyramides_de_Gizeh',
  //                 label: 'Estimer mon reste à charge'
  //               }
  //             ]
  //           },
  //           {
  //             image: {
  //               url: 'https://picsum.photos/546/970?image=718',
  //               alt: 'Achitechture',
  //               dimensions: { width: 238, height: 380 },
  //               mobile: {
  //                 alt: 'architecture',
  //                 url: 'https://picsum.photos/546/307?image=718',
  //                 dimensions: { width: 546, height: 307 }
  //               },
  //               tablet: {
  //                 alt: 'architecture',
  //                 url: 'https://picsum.photos/737/415?image=718',
  //                 dimensions: { width: 737, height: 415 }
  //               },
  //               desktop: {
  //                 alt: 'architecture',
  //                 url: 'https://picsum.photos/238/380?image=718',
  //                 dimensions: { width: 238, height: 380 }
  //               }
  //             },
  //             title: 'Optique',
  //             text:
  //               'Prise en charge à partir de #100€ pour les montures et #160€ pour les verres.'
  //           },
  //           {
  //             image: {
  //               url: 'https://picsum.photos/546/970?image=433',
  //               alt: 'Achitechture',
  //               dimensions: { width: 238, height: 380 },
  //               mobile: {
  //                 alt: 'architecture',
  //                 url: 'https://picsum.photos/546/307?image=433',
  //                 dimensions: { width: 546, height: 307 }
  //               },
  //               tablet: {
  //                 alt: 'architecture',
  //                 url: 'https://picsum.photos/737/415?image=433',
  //                 dimensions: { width: 737, height: 415 }
  //               },
  //               desktop: {
  //                 alt: 'architecture',
  //                 url: 'https://picsum.photos/238/380?image=433',
  //                 dimensions: { width: 238, height: 380 }
  //               }
  //             },
  //             title: 'Hôpital',
  //             text:
  //               'Préparez au mieux votre intervention ou celle d’un proche avec notre service Hospiway. ',
  //             links: [
  //               {
  //                 url: 'https://fr.wikipedia.org/wiki/Pyramides_de_Gizeh',
  //                 label: 'En savoir plus'
  //               },
  //               {
  //                 url: 'https://fr.wikipedia.org/wiki/Pyramides_de_Gizeh',
  //                 label: 'Estimer mon reste à charge'
  //               }
  //             ]
  //           }
  //         ]}
  //       />
  //     )
  //     .toJSON();

  //   expect(tree).toMatchSnapshot();
  // });
});
