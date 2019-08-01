/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import Text from './Text'

function ColoredHeaderContainer({ children, icon, title }) {
  const theme = useContext(ThemeContext)

  const styles = {
    wrapper: {
      width: '100%',
      maxWidth: '768px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    headerWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: '80px',
      padding: '10px 20px',
      backgroundColor: theme.colors.primary,
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
    },
    title: {
      color: theme.colors.white,
    },
    formWrapper: {
      padding: 40,
    },
  }

  return (
    <div css={styles.wrapper}>
      <div css={styles.headerWrapper}>
        {icon && (
          <Icon
            name={icon}
            color="white"
            size="30px"
            css={{ marginRight: 20 }}
          />
        )}
        <Text tag="h3" css={styles.title}>
          {title}
        </Text>
      </div>
      <div css={styles.formWrapper}>{children}</div>
    </div>
  )
}

export default ColoredHeaderContainer

ColoredHeaderContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}
