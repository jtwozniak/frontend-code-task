import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts'
import { SimplifiedData, StatsData } from '../helpers/transformData'

type Props = {
  data: SimplifiedData[]
}

export const DataPie = ({ data }: Props) => (
  <ResponsiveContainer width={150} height={150}>
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        fill="#8884d8"
      />
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
)
