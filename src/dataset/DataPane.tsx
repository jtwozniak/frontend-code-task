import React from 'react'
import styled from 'styled-components'
import { DataBox } from './Components/DataBox'
import { DataPie } from './Details/DataPie'
import { KeyValues } from './Details/KeyValues'
import { DataStatSimplified } from './helpers/transformData'

type Props = DataStatSimplified & {
  fontScale?: number
}

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`

export const DataPane = ({ fontScale = 1, detailedName, details }: Props) => (
  <DataBox fontScale={fontScale} title={detailedName}>
    <Flex>
      <DataPie details={details} />
      <KeyValues details={details} />
      {details.map((d) => (
        <DataPane fontScale={fontScale * 0.9} {...d} />
      ))}
    </Flex>
  </DataBox>
)
