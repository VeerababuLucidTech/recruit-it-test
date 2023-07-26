import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
} from 'recharts';

function WidgetChart({ data,dataKey,generateColor }) {
    return (
        <div style={{ marginLeft: "10px" }}>
            <ResponsiveContainer width="10%" height={50} className="card">
            <LineChart
                width={600}
                height={300}
                data={data}
            >
                <Line
                    type="monotone"
                    dataKey={dataKey}
                    stroke={generateColor()}
                />
            </LineChart>
            </ResponsiveContainer>
        </div>

    );
}

export default WidgetChart;
