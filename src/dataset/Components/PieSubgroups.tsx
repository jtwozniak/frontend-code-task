import React, { useState } from 'react'
import styled from 'styled-components'
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

const Button = styled.button`
  display: inline-block;
  text-align: center;
  background: #e8204e;
  color: white;
  font-weight: bold;
  padding: 0.5em;
  line-height: 1;
  border: 0;
  border-radius: 1em;
  position: relative;
  min-width: 8.23em;
  text-decoration: none;
  font-size: 0.75rem;
`

const PieSubGroup = ({ name, data, mostCommon }: PieData) => {
  const [showCommon, setShowCommon] = useState(false)

  const commonCount = mostCommon?.length ?? 0
  const isCommonData = !!commonCount

  return (
    <DataBox fontScale={0.7} title={`${name}`}>
      <Flex>
        <DataPie data={data} />
        <KeyValues data={data} />
      </Flex>

      {isCommonData && (
        <>
          <Button onClick={() => setShowCommon(!showCommon)}>
            {showCommon ? 'Hide' : 'Show'} most common
          </Button>

          {showCommon && (
            <Flex>
              {commonCount > 3 ? (
                <DataMap data={mostCommon} />
              ) : (
                <>
                  <DataPie data={mostCommon} />
                  <KeyValues data={mostCommon} />
                </>
              )}
            </Flex>
          )}
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
        {pies.map((pie, index) => (
          <PieSubGroup key={String(index)} {...pie} />
        ))}
      </FlexSpaceBetween>
    </>
  )
}
