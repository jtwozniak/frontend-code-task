import React from 'react'
import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`

export const FlexSpaceBetween = styled(Flex)`
  justify-content: center;
`

export const Subtitle = styled.h2`
  padding: 5px;
`

export const Spacer = styled.div`
  height: 2em;
`
