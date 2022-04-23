import React from 'react'
import { VictoryChart, VictoryAxis,
    VictoryTheme,VictoryLine} from 'victory';

export default function AnnualTestChart({testsData}) {
    
    const tickFormat=Object.keys(testsData)

    const tickValues=tickFormat.map((v,i)=>i+1)
    const data=[]
    for(const tickValue of tickValues){
        data.push({x:tickValue,y:Object.values(testsData)[tickValue-1]})
    }

  return (
<VictoryChart
  theme={VictoryTheme.material} className="annual-test-chart"
><VictoryAxis
          tickValues={tickValues}
          tickFormat={tickFormat}
        />  
        <VictoryAxis
          dependentAxis domain={[0,100]}
        />
  <VictoryLine
    style={{
      data: { stroke: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
    
    data={data}
  />
</VictoryChart>
  )
}
