import React from 'react'
import { CategoriesData, SimplifiedData } from '../helpers/transformData'
import { PieSubgroup } from './PieSubgroup'

const CoutersMap = {
  nullCount: 'Null',
  distinctCount: 'Distinct',
  duplicateCount: 'Duplicate',
  totalCount: 'Total',
}

const keys = ['nullCount', 'distinctCount', 'duplicateCount', 'totalCount']

export const PieGroup = ({
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
