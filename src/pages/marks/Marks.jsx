import React from 'react'
import Charts from '../../components/chart/Charts'
import { marksData } from '../../components/Data-sidebar'
import Featured from '../../components/featured/Featured'


export const Marks = () => {
  return (
    <div className='marks'>
        <Featured/>
        <Charts data={marksData} title="User Analytics" grid dataKey="users"/>
    </div>
  )
}
