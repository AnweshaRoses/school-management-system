import React from 'react'
import { marksData } from '../../components/Data-sidebar'
import MarksPieChart from '../../components/MarksPieChart'
import AnnualTestChart from '../../components/AnnualTestChart'
import Featured from '../../components/featured/Featured'


export default function Marks() {
  return (
    <div className='marks'>
      <div className='header'>
             <h1>Results</h1>
         </div>
        <Featured/>
        <div className='charts'>
        <AnnualTestChart testsData={{"fa-1":89,"sa-2":21,"xa-1":89,"za-2":21}}/>
        </div>
        <MarksPieChart size="500" percentage="85" subject="Maths"/>
    </div>
  )
}
