import React from 'react'
import styled from 'styled-components'
import { SimplifiedData } from '../helpers/transformData'

const Div = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & > * {
    padding: 2px;
    font-size: 0.9em;
  }
`

const Label = styled.div<{ $bold: boolean }>`
  cursor: pointer;
  ${({ $bold }) => ($bold ? 'font-weight: bold;' : '')};
`

type Props = {
  data: SimplifiedData[]
  changeVisibilityOfDataSet?: (v: number) => void
  showSets?: boolean[]
}

export const KeyValues = ({ data }: Props) => (
  <Div>
    {data.map(({ name, value }) => (
      <div>
        {name}: {value}{' '}
      </div>
    ))}
  </Div>
)

export const KeyValuesOnClick = ({
  data,
  showSets,
  changeVisibilityOfDataSet,
}: Props) => (
  <Div>
    {data.map(({ name, value }, index) => (
      <Label
        onClick={() => changeVisibilityOfDataSet(index)}
        $bold={showSets[index]}
      >
        {name}: {value}
      </Label>
    ))}
  </Div>
)
