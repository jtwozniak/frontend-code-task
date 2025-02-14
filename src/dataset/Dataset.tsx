import React, { useEffect, useState } from 'react'
import { getDatasets } from '../api/api'
import { DataBox } from './Components/DataBox'
import { DataPane } from './Components/DataPane'
import { StatsData, transformData } from './helpers/transformData'



const Dataset: React.FC = () => {
  const [data, setData] = useState<StatsData>(null)

  // @ts-ignore
  useEffect(async () => {
    const resp = await getDatasets()
    const transformedData = transformData(resp)
    setData(transformedData)
  }, [])

  return data ? <DataPane {...data}  /> : (
    <DataBox title='Loading data...' />
  )
}

export default Dataset
