import React from 'react'
import { DataBox } from './DataBox'
import { DataPie } from './DataPie'
import { KeyValues } from './KeyValues'
import {
  SimplifiedData,
} from '../helpers/transformData'
import { Flex, FlexSpaceBetween, Subtitle } from './styled'



type PieData = {
  title: string
  pies: {
    key: string
    data: SimplifiedData[]
    mostCommon?: SimplifiedData[]
  }[]
}

export const PieSubgroup = ({ title, pies }: PieData) => (
  <>
    <Subtitle>{title}</Subtitle>
    <FlexSpaceBetween>
      {pies.map(({ key, data, mostCommon }) => (
        <DataBox fontScale={0.7} title={`${key}`}>
          <Flex>
            <DataPie data={data} />
            <KeyValues data={data} />
          </Flex>
          {mostCommon && (
            <>
              <Flex>
                Render button
                <DataPie data={mostCommon} />
                <KeyValues data={mostCommon} />
              </Flex>
            </>
          )}
        </DataBox>
      ))}
    </FlexSpaceBetween>
  </>
)
