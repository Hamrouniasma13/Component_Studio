/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import SlickSlider from 'react-slick'
import ProgressiveImage from 'react-progressive-image'

import Slice from './Slice'
import Text from '../components/Text'
import Button from '../components/Button'

function Card({ image, title, text, action }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      backgroundColor: '#fff',
      border: `1px solid ${theme.colors.lightGray}`,
      height: '600px',
      overflow: 'hidden',
      width: '320px',
      margin: '0 auto',
      padding: '30px',
      textAlign: 'center',
      display: 'flex',
      color: theme.colors.text,
      flexDirection: 'column',

      [theme.media.tablet]: {
        width: '333px', // let space for boxShadow
        marginLeft: '10px'
      },

      [theme.media.laptop]: {
        width: '350px',
        marginLeft: 'auto'
      }
    },
    image: {
      willChange: 'opacity',
      transition: 'opacity 0.5s',
      maxHeight: '200px',
      minHeight: '140px',
      margin: '20px auto'
    }
  }

  return (
    <div css={styles.wrapper}>
      <div css={{ marginBottom: 30 }}>
        <ProgressiveImage src={image.src}>
          {(src, loading) => (
            <img
              css={{ ...styles.image, opacity: loading ? 0 : 1 }}
              src={src}
              alt={image.alt}
            />
          )}
        </ProgressiveImage>
      </div>
      <Text.h3 mb={30}>{title}</Text.h3>
      <Text css={{ textAlign: 'center', flex: 1 }}>{text}</Text>
      {action ? (
        <div>
          <Button href={action.url} color="secondary">
            {action.label}
          </Button>
        </div>
      ) : null}
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  }),
  title: PropTypes.string,
  text: PropTypes.any,
  action: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string
  })
}

export default function ThreeCards({ title, cards }) {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      marginLeft: '-15px',
      marginRight: '-15px',
      paddingBottom: '30px', // Space for dots
      [theme.media.tablet]: {
        marginLeft: 0,
        marginRight: 0
      }
    }
  }

  const sliderSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: theme.breakpoints.desktop - 1,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: theme.breakpoints.tablet - 1,
        settings: { slidesToShow: 1 }
      }
    ]
  }

  return (
    <Slice title={title}>
      <div css={styles.wrapper}>
        <SlickSlider {...sliderSettings}>
          {cards && cards.map((card, key) => <Card {...card} key={key} />)}
        </SlickSlider>
      </div>
    </Slice>
  )
}

ThreeCards.propTypes = {
  title: Slice.propTypes.title,
  cards: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)).isRequired
}
