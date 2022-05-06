import React from 'react';
import PropTypes from 'prop-types'
import {LineChart, Line,CartesianGrid,XAxis,YAxis,Tooltip,Label} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div>
                <p>{`Время: ${payload[0].payload?.start_Dt}`}</p>
                <p>{`ID матча: ${payload[0].payload?.matchID}`}</p>
                <p>{`Эло: ${payload[0]?.payload?.elo}`}</p>
            </div>
        )
    }

    return null
}

CustomTooltip.propTypes = {
    type: PropTypes.string,
    payload: PropTypes.array,
    label: PropTypes.string,
}

//Used only for single tables
export function toGraph(name,data){
    console.log(name,data)
    return  <div>
        <h2 className = "text-center"> {name}</h2>
        <LineChart width={1200} height={600} data={data}>
            <Line type="monotone" dataKey="elo" dot={null}/>
            <CartesianGrid/>
            <XAxis angle={40} xAxisId={1} label="Время" dataKey="start_Dt" tick={false} tickFormatter={(value) => value.slice(0,10)}>
                <Label position='bottom' style={{textAnchor:'middle'}}>
                    Время
                </Label>
            </XAxis>
            <XAxis dataKey="start_Dt" hide={true} xAxisId={0} label="Время"/>
            <YAxis width={60}>
            </YAxis>
            <Tooltip content={<CustomTooltip/>}/>

        </LineChart>
    </div>
}