import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { DataBox } from './DataBox'
import { DataPie } from './DataPie'
import { KeyValuesOnClick } from './KeyValues'
import { StatsData } from '../helpers/transformData'
import { PieGroup } from './PieGroup'
import { Flex, Spacer } from './styled'

const Info = styled.div`
  display: flex;
  align-items: center;
  font-style: italic;
`

type Props = StatsData & {
  fontScale?: number
}

export const DataPane = ({ fontScale = 1, name, dataSets }: Props) => {
  const [showSets, setShowSets] = useState(
    new Array(dataSets.length).fill(false)
  )

  const changeVisibilityOfDataSet = useCallback(
    (index: number) => {
      const newSets = [...showSets]
      newSets[index] = !newSets[index]
      setShowSets(newSets)
    },
    [showSets]
  )

  return (
    <DataBox fontScale={fontScale} title={name}>
      <Flex>
        <DataPie data={dataSets} />
        <KeyValuesOnClick
          data={dataSets}
          showSets={showSets}
          changeVisibilityOfDataSet={changeVisibilityOfDataSet}
        />
        <Info>{'<== Click listed elements to see details'}</Info>
      </Flex>
      {dataSets.map(
        ({ detailedName, categories, keys }, index) =>
          showSets[index] && (
            <>
              <DataBox key={detailedName} title={detailedName} fontScale={0.8}>
                <PieGroup categories={categories} title="Categories" />
                <PieGroup categories={keys} title="Keys" />
              </DataBox>
              <Spacer />
            </>
          )
      )}
    </DataBox>
  )
}
