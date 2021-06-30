import React from 'react'
import styled from 'styled-components'
import { DataBox } from './Components/DataBox'
import { DataPie } from './Components/DataPie'
import { KeyValues } from './Components/KeyValues'
import {
  CategoriesData,
  SimplifiedData,
  StatsData,
} from './helpers/transformData'

type Props = StatsData & {
  fontScale?: number
}

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`

const FlexSpaceBetween = styled(Flex)`
  justify-content: center;
`

const Spacer = styled.div`
  height: 2em;
`

const Subtitle = styled.h2`
  padding: 5px;
`

const CoutersMap = {
  nullCount: 'Null',
  distinctCount: 'Distinct',
  duplicateCount: 'Duplicate',
  totalCount: 'Total',
}

const keys = ['nullCount', 'distinctCount', 'duplicateCount', 'totalCount']

type PieData = {
  title: string
  pies: {
    key: string
    data: SimplifiedData[]
    mostCommon?: SimplifiedData[]
  }[]
}

const PieSubgroup = ({ title, pies }: PieData) => (
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

const PieGroup = ({
  categories,
  title,
}: {
  title: string
  categories: CategoriesData[]
}) => {
  if (!categories.length) {
    return null
  }

  const mergedPieData = categories.map(
    ({ name, detailedName, mostCommon, ...rest }) => ({
      mostCommon,
      key: [name, detailedName].join(' - '),
      data: keys.map((key) => ({
        name: CoutersMap[key],
        value: rest[key],
      })),
    })
  )

  const piesData = keys.map((key) => ({
    key,
    data: categories.map(
      ({
        name,
        [key as keyof CategoriesData]: value,
        mostCommon,
      }): SimplifiedData => ({
        name,
        value: value as number,
      })
    ),
  }))

  return (
    <>
      <PieSubgroup title={title} pies={mergedPieData} />
      {mergedPieData.length > 1 && (
        <PieSubgroup title={`${title} by type`} pies={piesData} />
      )}
    </>
  )
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
