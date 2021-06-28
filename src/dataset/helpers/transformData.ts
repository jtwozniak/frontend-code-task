import { Dataset } from '../../api/api-definition'

export type DataStatSimplified = {
  key: string
  value: number
  detailedName: string
  details: DataStatSimplified[]
}

const shortDate = (date: string) => new Date(date).toDateString()

const calculateCounter = (total, nullfraction, distinct) => {

}

export const transformData = (apiData: Dataset[]): DataStatSimplified => {
  return {
    key: 'Data sets',
    value: NaN,
    detailedName: `Data sets:  Count - ${apiData.length}`,
    details: apiData.map(({ name, created_at, updated_at, stats }) => {
        return {
          key: name,
          detailedName: `${name}: Created - ${shortDate(
            created_at
          )}, Updated - ${shortDate(updated_at)}`,
          value: Number(stats.row_count),
          details: stats.keys.map(({label, null_fraction, distinct}) => ({
            key: label
          }))
        }
      })
  }
}
