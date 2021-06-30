import { Dataset } from '../../api/api-definition'

export type SimplifiedData = {
  name: string
  value: number
}

export type CategoriesData = {
  name: string
  detailedName?: string
  nullCount: number
  distinctCount: number
  duplicateCount: number
  // totalCount: number
  mostCommon: SimplifiedData[]
}

type DataSet = SimplifiedData & {
  detailedName: string
  keys?: CategoriesData[]
  categories?: CategoriesData[]
}

export type StatsData = {
  name: string
  dataSets?: DataSet[]
}

const shortDate = (date: string) => new Date(date).toDateString()

const calculateCounters = (
  total: number,
  nullfraction: number,
  distinct: number
) => {
  const nullCount = Math.round(total * nullfraction)
  const distinctCount = distinct > 0 ? distinct : Math.floor(-distinct * total)

  return {
    nullCount,
    distinctCount,
    duplicateCount: total - nullCount - distinctCount,
    // totalCount: total,
  }
}

export const transformData = (apiData: Dataset[]): StatsData => {
  const totalRows = apiData.reduce(
    (sum, { stats: { row_count } }) => sum + Number(row_count),
    0
  )
  return {
    name: `Data sets:  Count - ${apiData.length}, Rows count - ${totalRows}`,
    dataSets: apiData.map(
      ({ name, created_at, updated_at, stats }): DataSet => {
        return {
          name,
          value: Number(stats.row_count),
          detailedName: `${name}: Created - ${shortDate(
            created_at
          )}, Updated - ${shortDate(updated_at)}`,
          keys: stats.keys.map(({ label, distinct, null_fraction }) => ({
            name: label,
            ...calculateCounters(
              Number(stats.row_count),
              null_fraction,
              distinct
            ),
            mostCommon: [],
          })),
          categories: stats.categories.map(
            ({
              name,
              best_representation: {
                representation_name,
                statistics: { null_fraction, distinct, most_common },
              },
            }) => ({
              name,
              detailedName: representation_name,
              ...calculateCounters(
                Number(stats.row_count),
                null_fraction,
                distinct
              ),
              mostCommon: most_common.map(
                ({ value: { text: name }, frequency }) => ({
                  name,
                  value: Math.round(Number(stats.row_count) * frequency),
                })
              ),
            })
          ),
        }
      }
    ),
  }
}
