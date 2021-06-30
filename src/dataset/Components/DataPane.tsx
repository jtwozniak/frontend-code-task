import React from 'react'
import { DataBox } from './DataBox'
import { DataPie } from './DataPie'
import { KeyValues } from './KeyValues'
import {
  StatsData,
} from '../helpers/transformData'
import { PieGroup } from './PieGroup'
import { Flex, Spacer } from './styled'

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
        <DataBox key={detailedName} title={detailedName} fontScale={0.8}>
          <PieGroup categories={categories} title="Categories" />
          <PieGroup categories={keys} title="Keys" />
        </DataBox>
        <Spacer />
      </>
    ))}
  </DataBox>
)
