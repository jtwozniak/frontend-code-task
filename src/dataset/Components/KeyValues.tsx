import React from 'react'
import styled from 'styled-components'
import { DataStatSimplified } from '../helpers/transformData'

const Div = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  justify-content: center;
  & > * {
    padding: 2px;
  }
`

export const KeyValues = ({ details }: Pick<DataStatSimplified, 'details'>) => (
  <Div>
    {details.map(({ key, value }) => (
      <div>
        {key}: {value}
      </div>
    ))}
  </Div>
)
