/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import Button from './Button'
import Text from './Text'
import Icon from './Icon'

function IllustratedCTA({ wording, icon, onClick, href }) {
  const theme = useContext(ThemeContext)

  const styles = {
    wrapper: {
      width: '100%',
      maxWidth: '500px',
      height: '270px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      boxShadow: '0 1px 4px 0 rgba(0,0,0,0.15)',
      backgroundColor: theme.colors.white,
      padding: '10px 25px',
      marginBottom: 20,
    },
    title: {
      alignSelf: 'flex-start',
    },
    description: {
      textAlign: 'center',
    },
  }

  return (
    <div css={styles.wrapper}>
      <Text tag="h3" css={styles.title}>
        {wording.title}
      </Text>
      <Icon name={icon} size={60} />
      <Text css={styles.description}>{wording.description}</Text>
      <Button color="secondary" onClick={onClick} href={href}>
        {wording.button}
      </Button>
    </div>
  )
}

export default IllustratedCTA

IllustratedCTA.propTypes = {
  wording: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string,
  }),
  icon: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
}
