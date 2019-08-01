import React from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'

import Container from '../../components/Container'
import FooterLang from './FooterLang'
import { textColor, darken } from '../../theme/utils'

function BottomFooter({ langs, lang, langTitle, onLangChange, legal }) {
  const theme = React.useContext(ThemeContext)
  const styles = {
    wrapper: {
      color: textColor(darken(theme.colors.primary, 20), theme),
      backgroundColor: darken(theme.colors.primary, 30),
    },
    legal: {
      fontSize: '12px',
      textAlign: 'center',
      padding: '10px 0',
      [theme.media.tablet]: {
        flex: 1,
        fontSize: '14px',
        '&:not(:first-child)': {
          textAlign: 'right',
        },
      },
      [theme.media.laptop]: {
        textAlign: 'right',
      },
    },
    bottom: {
      label: 'BottomWrapper',
      marginLeft: '-15px',
      marginRight: '-15px',
      [theme.media.tablet]: {
        marginLeft: 0,
        marginRight: 0,
        display: 'flex',
        alignItems: 'center',
        minHeight: '40px',
      },
    },
  }
  return (
    <div css={styles.wrapper}>
      <Container>
        <div css={styles.bottom}>
          {langs && langs.length > 0 ? (
            <FooterLang
              langs={langs}
              lang={lang}
              title={langTitle}
              onLangChange={onLangChange}
            />
          ) : null}
          {legal && <div css={styles.legal}>{legal}</div>}
        </div>
      </Container>
    </div>
  )
}

BottomFooter.propTypes = {
  langs: PropTypes.arrayOf(PropTypes.object),
  legal: PropTypes.string,
  lang: PropTypes.shape({
    ID: PropTypes.string,
    label: PropTypes.string,
  }),
  langTitle: PropTypes.string,
  onLangChange: PropTypes.func,
}

export default BottomFooter
