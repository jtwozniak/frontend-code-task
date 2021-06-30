import React from 'react'
import styled from 'styled-components'

// $ means that the prop will be filtered from DOM
// https://styled-components.com/docs/api#transient-props
type LegendSize = { $fontScale: number }
const Legend = styled.div<LegendSize>`
  font-size: ${({ $fontScale }: LegendSize) => String(2 * $fontScale)}em;
  text-align: center;
`

const Box = styled.div`
  border: 2px solid;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
`

type Props = React.PropsWithChildren<{
  title: string
  fontScale?: number
}>

export const DataBox = ({
  title,
  fontScale = 1, // 2em
  children,
}: Props) => (
  <Box>
    <Legend $fontScale={fontScale}>{title}</Legend>
    {children}
  </Box>
)
