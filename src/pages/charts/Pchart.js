import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const Pchart = ({data,dataKey,generateColor}) => {
  const resumeData = data.map(entry =>({
    name:entry.name,
    value:parseInt(entry[dataKey])
  }));
  return (
    <div style={{ marginLeft: "10px" }}>
      <ResponsiveContainer width="90%" height={200} className="card">
      <PieChart width={400} height={300}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={resumeData}
        cx={110}
        cy={100}
        outerRadius={70}
        fill="#8884d8"
        label
      >
        {resumeData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={generateColor()}
          />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
      </ResponsiveContainer>  
    </div>
  )
}

export default Pchart