import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';

function Bchart({data,xAxisName,legendKeys,generateColor}) {
  return (
    <div style={{ marginLeft: "10px" }}>
      <ResponsiveContainer width="90%" height={200} className="card">
        <BarChart
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
            <Bar
              key={index}
              dataKey={key}
              fill={generateColor()}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Bchart;


