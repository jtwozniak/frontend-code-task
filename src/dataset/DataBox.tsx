import React from 'react'
import styled from 'styled-components'

// $ means that the prop will be filtered from DOM
// https://styled-components.com/docs/api#transient-props
type LegendSize = { $fontSize: number }
const Legend = styled.div<LegendSize>`
  font-size: ${({ $fontSize = 1 }: LegendSize) => String($fontSize)}em;
  text-align: center;
  
`

const Box = styled.div`
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
`

type Props =  React.PropsWithChildren<{
  title: string
  fontSize?: number
}>

export const DataBox = ({
  title,
  fontSize = 1,
  children,
}: Props) => (
  <Box>
    <Legend $fontSize={fontSize}>{title}</Legend>
    {children}
  </Box>
)
