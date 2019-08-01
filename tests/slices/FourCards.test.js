import React from 'react';
import renderer from 'react-test-renderer';

import FourCards from '../../slices/FourCards';

describe('Component: <FourCards />', () => {
  it('render snapshot', () => {
    const tree = renderer
      .create(
        <FourCards
          title="Mes contrats"
          cards={[
            {
              image: {
                url: 'https://picsum.photos/546/970?image=670',
                alt: 'Achitechture',
                dimensions: { width: 238, height: 380 },
                mobile: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/546/307?image=670',
                  dimensions: { width: 546, height: 307 }
                },
                tablet: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/737/415?image=670',
                  dimensions: { width: 737, height: 415 }
                },
                desktop: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/238/380?image=670',
                  dimensions: { width: 238, height: 380 }
                }
              },
              title: 'Médecine et soins courants',
              text:
                'Généralistes, cardiologue, etc. adhérent au CAS, vous êtes intégralement remboursés [0€ de reste à charge] sauf dans quelques cas.',
              links: [
                {
                  url: 'https://fr.wikipedia.org/wiki/Pyramides_de_Gizeh',
                  label: 'Voir les détails de mes garanties'
                },
                {
                  url: 'https://fr.wikipedia.org/wiki/Pyramides_de_Gizeh',
                  label: 'Estimer mon reste à charge'
                }
              ]
            },
            {
              image: {
                url: 'https://picsum.photos/546/970?image=903',
                alt: 'Achitechture',
                dimensions: { width: 238, height: 380 },
                mobile: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/546/307?image=903',
                  dimensions: { width: 546, height: 307 }
                },
                tablet: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/737/415?image=903',
                  dimensions: { width: 737, height: 415 }
                },
                desktop: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/238/380?image=903',
                  dimensions: { width: 238, height: 380 }
                }
              },
              title: 'Dentaire',
              text:
                'Prise en charge en fonction de l’intervention et de la position de la dent.',
              links: [
                {
                  url: 'https://fr.wikipedia.org/wiki/Pyramides_de_Gizeh',
                  label: 'En savoir plus'
                },
                {
                  url: 'https://fr.wikipedia.org/wiki/Pyramides_de_Gizeh',
                  label: 'Estimer mon reste à charge'
                }
              ]
            },
            {
              image: {
                url: 'https://picsum.photos/546/970?image=718',
                alt: 'Achitechture',
                dimensions: { width: 238, height: 380 },
                mobile: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/546/307?image=718',
                  dimensions: { width: 546, height: 307 }
                },
                tablet: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/737/415?image=718',
                  dimensions: { width: 737, height: 415 }
                },
                desktop: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/238/380?image=718',
                  dimensions: { width: 238, height: 380 }
                }
              },
              title: 'Optique',
              text:
                'Prise en charge à partir de #100€ pour les montures et #160€ pour les verres.',
              links: [
                {
                  url: 'https://fr.wikipedia.org/wiki/Pyramides_de_Gizeh',
                  label: 'En savoir plus'
                },
                {
                  url: 'https://fr.wikipedia.org/wiki/Pyramides_de_Gizeh',
                  label: 'Estimer mon reste à charge'
                }
              ]
            },
            {
              image: {
                url: 'https://picsum.photos/546/970?image=433',
                alt: 'Achitechture',
                dimensions: { width: 238, height: 380 },
                mobile: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/546/307?image=433',
                  dimensions: { width: 546, height: 307 }
                },
                tablet: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/737/415?image=433',
                  dimensions: { width: 737, height: 415 }
                },
                desktop: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/238/380?image=433',
                  dimensions: { width: 238, height: 380 }
                }
              },
              title: 'Hôpital',
              text:
                'Préparez au mieux votre intervention ou celle d’un proche avec notre service Hospiway. ',
              links: [
                {
                  url: 'https://fr.wikipedia.org/wiki/Pyramides_de_Gizeh',
                  label: 'En savoir plus'
                },
                {
                  url: 'https://fr.wikipedia.org/wiki/Pyramides_de_Gizeh',
                  label: 'Estimer mon reste à charge'
                }
              ]
            }
          ]}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('render simpliest fourCards', () => {
    const tree = renderer
      .create(
        <FourCards
          cards={[
            {
              image: {
                url: 'https://picsum.photos/546/970?image=670',
                alt: 'Achitechture',
                dimensions: { width: 238, height: 380 }
              },
              title: 'Médecine et soins courants'
            },
            {
              image: {
                url: 'https://picsum.photos/546/970?image=903',
                alt: 'Achitechture',
                dimensions: { width: 238, height: 380 },
                mobile: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/546/307?image=903',
                  dimensions: { width: 546, height: 307 }
                },
                tablet: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/737/415?image=903',
                  dimensions: { width: 737, height: 415 }
                },
                desktop: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/238/380?image=903',
                  dimensions: { width: 238, height: 380 }
                }
              },
              links: [
                {
                  url: 'https://fr.wikipedia.org/wiki/Pyramides_de_Gizeh',
                  label: 'En savoir plus'
                },
                {
                  url: 'https://fr.wikipedia.org/wiki/Pyramides_de_Gizeh',
                  label: 'Estimer mon reste à charge'
                }
              ]
            },
            {
              image: {
                url: 'https://picsum.photos/546/970?image=718',
                alt: 'Achitechture',
                dimensions: { width: 238, height: 380 },
                mobile: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/546/307?image=718',
                  dimensions: { width: 546, height: 307 }
                },
                tablet: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/737/415?image=718',
                  dimensions: { width: 737, height: 415 }
                },
                desktop: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/238/380?image=718',
                  dimensions: { width: 238, height: 380 }
                }
              },
              title: 'Optique',
              text:
                'Prise en charge à partir de #100€ pour les montures et #160€ pour les verres.'
            },
            {
              image: {
                url: 'https://picsum.photos/546/970?image=433',
                alt: 'Achitechture',
                dimensions: { width: 238, height: 380 },
                mobile: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/546/307?image=433',
                  dimensions: { width: 546, height: 307 }
                },
                tablet: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/737/415?image=433',
                  dimensions: { width: 737, height: 415 }
                },
                desktop: {
                  alt: 'architecture',
                  url: 'https://picsum.photos/238/380?image=433',
                  dimensions: { width: 238, height: 380 }
                }
              },
              title: 'Hôpital',
              text:
                'Préparez au mieux votre intervention ou celle d’un proche avec notre service Hospiway. ',
              links: [
                {
                  url: 'https://fr.wikipedia.org/wiki/Pyramides_de_Gizeh',
                  label: 'En savoir plus'
                },
                {
                  url: 'https://fr.wikipedia.org/wiki/Pyramides_de_Gizeh',
                  label: 'Estimer mon reste à charge'
                }
              ]
            }
          ]}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
