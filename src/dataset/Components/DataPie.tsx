import React, { useMemo } from 'react'
import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from 'recharts'
import { generateColor } from '../helpers/colors'
import { SimplifiedData } from '../helpers/transformData'

type Props = {
  data: SimplifiedData[]
}

export const DataPie = ({ data }: Props) => {
  return (
    <ResponsiveContainer width={150} height={150}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={generateColor(index)} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}
