/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'
import Icon from './Icon'
import Text from './Text'

const FILE_TYPES = [
  'url',
  'csv',
  'doc',
  'docx',
  'pdf',
  'pptx',
  'txt',
  'xlsx',
  'zip',
]

const DocumentItem = ({ title, description, uri, fileType }) => {
  const theme = React.useContext(ThemeContext)

  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      position: 'relative',
      '&:nth-of-type(odd)': {
        backgroundColor: theme.colors.smallLightGray,
      },
    },
    leftWrapper: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightWrapper: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      flex: 10,
      padding: '0 15px',
    },
    title: {
      '&:last-child': { lineHeight: '40px' },
    },
    description: {
      marginTop: 5,
    },
  }

  return (
    <li css={styles.wrapper}>
      <div css={styles.leftWrapper}>
        <Icon
          name={FILE_TYPES.indexOf(fileType) > -1 ? fileType : 'file'}
          size={32}
        />
      </div>
      <div css={styles.contentWrapper}>
        <Text tag="div" css={styles.title}>
          {title}
        </Text>
        {description && (
          <Text tag="div" css={styles.description} size="typo6">
            {description}
          </Text>
        )}
      </div>
      <div css={styles.rightWrapper}>
        <Button
          href={uri}
          icon={fileType === 'url' ? 'right' : 'download'}
          color="white"
          ghost
        />
      </div>
    </li>
  )
}

export default DocumentItem

DocumentItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  uri: PropTypes.string.isRequired,
  fileType: PropTypes.oneOf(FILE_TYPES),
}

DocumentItem.defaultProps = {
  description: '',
  fileType: '',
}
