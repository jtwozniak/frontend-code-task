import React from 'react'
import { CategoriesData, SimplifiedData } from '../helpers/transformData'
import { PieSubgroups } from './PieSubgroups'

const CoutersMap = {
  nullCount: 'Null',
  distinctCount: 'Distinct',
  duplicateCount: 'Duplicate',
}

const keys = ['nullCount', 'distinctCount', 'duplicateCount']

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
      name: [name, detailedName].filter(Boolean).join(' - '),
      data: keys.map((key) => ({
        name: CoutersMap[key],
        value: rest[key],
      })),
    })
  )

  const piesData = keys.map((key) => ({
    name: CoutersMap[key],
    data: categories.map(
      ({
        name,
        [key as keyof CategoriesData]: value,
      }): SimplifiedData => ({
        name,
        value: value as number,
      })
    ),
  }))

  return (
    <>
      <PieSubgroups title={title} pies={mergedPieData} />
      {mergedPieData.length > 1 && (
        <PieSubgroups title={`${title} by type`} pies={piesData} />
      )}
    </>
  )
}
