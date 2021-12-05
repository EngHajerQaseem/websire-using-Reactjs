import React from 'react'
import VerticalBarChart from 'amazing-react-charts';

const Chart=()=>{
    return(
        <div>
            
<VerticalBarChart
    color='green'
    xType='time'
    barWidth={ 100 }
    yComplement='%'
    tooltip={{ 
        label: 'Axis x tooltip label',
        result: 'Axis y tooltip label'
    }}
    data={[
        { label: 'value 1', result: 50 },
        { label: 'value 2', result: 21 },
        { label: 'value 3', result: 84 },
        { label: 'value 4', result: 79 }
    ]}
/>

        </div>
    )
}

export default Chart
