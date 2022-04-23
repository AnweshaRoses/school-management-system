import React from 'react'
import { VictoryPie } from 'victory';

export default function MarksPieChart({size,subject,percentage}) {
    const leftOutPercent=100-percentage
  return (
    <svg  width={size} height={size}>   
<text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="marks-pie-chart-subject">{subject}</text>
<VictoryPie
  standalone={false}
  colorScale={["white","navy"]}
  width={size} height={size}
  data={[
      { x: " ", y: percentage },
      {x:" ",y:leftOutPercent},
  ]} cornerRadius={10}
  innerRadius={130}
  labelPosition="centroid"
/></svg>
  )
}
