import React from 'react'
import styled from 'styled-components'
import { SimplifiedData } from '../helpers/transformData'

const Div = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  justify-content: center;
  & > * {
    padding: 2px;
  }
`

type Props = {
  data: SimplifiedData[]
}

export const KeyValues = ({ data }: Props) => (
  <Div>
    {data.map(({ name, value }) => (
      <div>
        {name}: {value}
      </div>
    ))}
  </Div>
)
