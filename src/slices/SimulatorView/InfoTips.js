import React from 'react'
import Link from '../../components/Link'
import Text from '../../components/Text'

import styled from '@emotion/styled'

const Wrapper = styled('div')({
  marginTop: '10px'
})

const InfoTips = ({ label, link }) => (
  <Wrapper>
    {link ? (
      <Link {...link}>
        <Text size="typo6">{label}</Text>
      </Link>
    ) : (
      <Text size="typo6">{label}</Text>
    )}
  </Wrapper>
)

export default InfoTips
