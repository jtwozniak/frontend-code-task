import React, { useState } from 'react'
import { DataBox } from './DataBox'
import { DataMap } from './DataMap'
import { DataPie } from './DataPie'
import { KeyValues } from './KeyValues'
import { SimplifiedData } from '../helpers/transformData'
import { Flex, FlexSpaceBetween, Subtitle } from './styled'

type PieData = {
  name: string
  data: SimplifiedData[]
  mostCommon?: SimplifiedData[]
}

type PiesData = {
  title: string
  pies: PieData[]
}

const PieSubGroup = ({ name, data, mostCommon }: PieData) => {
  const [showCommon, setShowCommon] = useState(false)

  return (
    <DataBox fontScale={0.7} title={`${name}`}>
      <Flex>
        <DataPie data={data} />
        <KeyValues data={data} />
      </Flex>
      {!!mostCommon?.length && (
        <button onClick={() => setShowCommon(!showCommon)}>
          {showCommon ? 'Hide' : 'Show'} most common
        </button>
      )}
      {mostCommon?.length > 3 && (
        <>
          Render button
          <Flex>
            <DataMap data={mostCommon} />
          </Flex>
        </>
      )}
    </DataBox>
  )
}

export const PieSubgroups = ({ title, pies }: PiesData) => {

  return (
    <>
      <Subtitle>{title}</Subtitle>
      <FlexSpaceBetween>
        {pies.map((pie) => (
          <PieSubGroup {...pie} />
        ))}
      </FlexSpaceBetween>
    </>
  )
}
