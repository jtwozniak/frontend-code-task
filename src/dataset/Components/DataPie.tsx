import React from 'react'
import { PieChart, Pie, Tooltip, Cell } from 'recharts'
import { generateColor } from '../helpers/colors'
import { SimplifiedData } from '../helpers/transformData'

type Props = {
  data: SimplifiedData[]
}

export const DataPie = ({ data }: Props) => {
  return (
    <PieChart width={150} height={150}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={generateColor(index)} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  )
}
