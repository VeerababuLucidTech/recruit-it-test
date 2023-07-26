import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';

function Lchart({data,xAxisName,legendKeys,generateColor}) {
  return (
    
    <div style={{marginLeft:"10px"}}>
      <ResponsiveContainer width="90%" height={200} className="card">
      <LineChart
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
        <Line
          key={index}
          type="monotone"
          dataKey={key}
          stroke={generateColor()}
        />
      ))}
    </LineChart>
      </ResponsiveContainer>

    </div>
    
  );
}

export default Lchart;
