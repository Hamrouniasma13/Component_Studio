import React from 'react'
import styled from '@emotion/styled'
import Text from '../../components/Text'
import Link from '../../components/Link'
import ProgressiveImage from 'react-progressive-image'

const StyledInnerImage = styled('img')(({ loading }) => ({
  maxWidth: '100%',
  minHeight: '200px',
  marginBottom: '30px',
  willChange: 'opacity',
  transition: 'opacity 0.5s',
  opacity: loading ? 0 : 1
}))

const StyledProgressiveImage = ({ src, alt }) => (
  <ProgressiveImage src={src}>
    {(_src, loading) => (
      <StyledInnerImage loading={loading} src={_src} alt={alt} />
    )}
  </ProgressiveImage>
)

const components = {
  Heading2: props => <Text.h2 mb={30} {...props} />,
  Heading3: props => <Text.h3 mb={30} {...props} />,
  Heading4: props => <Text.h4 mb={30} {...props} />,
  Heading5: props => <Text.h5 mb={30} {...props} />,
  Heading6: props => <Text.h6 mb={30} {...props} />,
  Paragraph: props => <Text.p mb={30} {...props} />,

  Image: StyledProgressiveImage,

  Strong: styled('span')({
    fontWeight: 'bold'
  }),

  Em: styled('span')({
    fontStyle: 'italic'
  }),

  ListItem: styled('li')({
    '&:not(:last-child)': {
      marginBottom: '5px'
    }
  }),

  List: styled('ul')({
    marginBottom: '30px',
    paddingLeft: '30px',
    listStyleType: 'circle'
  }),

  OList: styled('ol')({
    marginBottom: '30px',
    paddingLeft: '30px',
    listStyleType: 'decimal'
  }),

  Hyperlink: styled(Link)({
    color: 'blue',

    '&:hover': {
      textDecoration: 'underline'
    }
  })
}

export default components
