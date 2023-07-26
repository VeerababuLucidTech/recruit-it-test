import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';

function Achart({ data, xAxisName, legendKeys,generateColor }) {
    return (
    <div style={{ marginLeft: "10px" }}>
      <ResponsiveContainer width="90%" height={200} className="card">
        <AreaChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xAxisName} />
          <YAxis />
          <Tooltip />
          <Legend />
          {legendKeys.map((key, index) => (
            <Area
              key={index}
              dataKey={key}
              fill={generateColor()}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Achart;
