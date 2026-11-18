import React from 'react';
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Dashboard() {

  let data = [
    {name: 'Jan', Sales: 400},
    {name: 'Feb', Sales: 300},
    {name: 'Mar', Sales: 200},
    {name: 'Apr', Sales: 278},
    {name: 'May', Sales: 189},
    {name: 'Jun', Sales: 239},
    {name: 'Jul', Sales: 349},
  ]

  return (
    <div>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Sales" stroke="#8884d8" />
      </LineChart>
    </div>

  );
}

