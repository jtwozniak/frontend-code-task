import React from 'react'
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts'
import { SimplifiedData, StatsData } from '../helpers/transformData'

type Props = {
  data: SimplifiedData[]
}

export const DataMap = ({ data }: Props) => (
  <ResponsiveContainer width={300} height={150}>
    <Treemap data={data} dataKey="value" nameKey="name" fill="#8884d8" >
      <Tooltip />
    </Treemap>
  </ResponsiveContainer>
)
