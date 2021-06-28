import React, { useEffect, useState } from 'react'
import { getDatasets } from '../api/api'
import { DataBox } from './DataBox'


const Dataset: React.FC = () => {
  const [data, setData] = useState(null)

  // @ts-ignore
  useEffect(async () => {
    const resp = await getDatasets()
    setData(resp)
  }, [])

  return (
    <DataBox title='Data sets' fontSize={2}>
      {JSON.stringify(data, null, 2)}
    </DataBox>
  )
}

export default Dataset
