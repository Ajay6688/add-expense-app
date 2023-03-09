
import './Chart.css';
import { ChartBar } from './ChartBar';

export const Chart = (props)=>{

    let dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    let totalMax = Math.max(...dataPointsValues);

    console.log(totalMax)
    return (
        <div className='chart'>
            {
                props.dataPoints.map(dataPoint => 
                <ChartBar 
                key = {dataPoint.label}
                value = {dataPoint.value}
                maxValue = {totalMax}
                label = {dataPoint.label}
                /> )
            }
        </div>
    );
}