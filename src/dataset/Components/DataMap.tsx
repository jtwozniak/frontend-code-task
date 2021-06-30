import React from 'react'
import { Treemap,  Tooltip } from 'recharts'
import { SimplifiedData } from '../helpers/transformData'

type Props = {
  data: SimplifiedData[]
}

export const DataMap = ({ data }: Props) => (
  <Treemap
    width={300}
    height={150}
    data={data}
    dataKey="value"
    nameKey="name"
    fill="#8884d8"
  >
    <Tooltip />
  </Treemap>
)
