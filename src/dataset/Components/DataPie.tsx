import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts'
import { DataStatSimplified } from '../helpers/transformData'

export const DataPie = ({ details }: Pick<DataStatSimplified, 'details'>) => (
  <ResponsiveContainer width={250} height={250}>
    <PieChart>
      <Pie
        data={details}
        dataKey="value"
        nameKey="key"
        cx="50%"
        cy="50%"
        fill="#8884d8"
      />
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
)
