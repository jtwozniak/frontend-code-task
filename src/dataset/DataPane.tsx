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

const RenderCategories = ({
  categories,
  title,
}: {
  title: string
  categories: CategoriesData[]
}) => {
  if (!categories.length) {
    return null
  }
  const piesData = keys.map((key) => ({
    key,
    data: categories.map(
      ({ name, [key as keyof CategoriesData]: value }): SimplifiedData => ({
        name,
        value: value as number,
      })
    ),
  }))

  const mergedPieData = categories.map(({ name, detailedName, ...rest }) => ({
    key: [name, detailedName].join(' - '),
    name: detailedName ?? name,
    data: keys.map((key) => ({
      name: CoutersMap[key],
      value: rest[key],
    })),
  }))

  return (
    <>
      <Subtitle>{title}</Subtitle>
      <FlexSpaceBetween>
        {mergedPieData.map(({ key, data }) => (
          <DataBox fontScale={0.7} title={`${key}`}>
            <Flex>
              <DataPie data={data} />
              <KeyValues data={data} />
            </Flex>
          </DataBox>
        ))}
      </FlexSpaceBetween>

      {mergedPieData.length > 1 && (
        <>
          <Subtitle>{title} by type</Subtitle>
          <FlexSpaceBetween>
            {piesData.map(({ key, data }) => (
              <DataBox fontScale={0.7} title={`${CoutersMap[key]} cells`}>
                <Flex>
                  <DataPie data={data} />
                  <KeyValues data={data} />
                </Flex>
              </DataBox>
            ))}
          </FlexSpaceBetween>
        </>
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
          <RenderCategories categories={categories} title="Categories" />
          <RenderCategories categories={keys} title="Keys" />
        </DataBox>
        <Spacer />
      </>
    ))}
  </DataBox>
)
