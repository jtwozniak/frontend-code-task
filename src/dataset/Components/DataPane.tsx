import React from 'react'
import styled from 'styled-components'
import { DataBox } from './DataBox'
import { DataPie } from './DataPie'
import { KeyValues } from './KeyValues'
import {
  StatsData,
} from '../helpers/transformData'
import { PieGroup } from './PieGroup'

type Props = StatsData & {
  fontScale?: number
}



export const DataPane = ({ fontScale = 1, name, dataSets }: Props) => (
  <DataBox fontScale={fontScale} title={name}>
    <Flex>
      <DataPie data={dataSets} />
      <KeyValues data={dataSets} />
    </Flex>
    {dataSets.map(({ detailedName, categories, keys }) => (
      <>
        <DataBox title={detailedName} fontScale={0.8}>
          <PieGroup categories={categories} title="Categories" />
          <PieGroup categories={keys} title="Keys" />
        </DataBox>
        <Spacer />
      </>
    ))}
  </DataBox>
)
