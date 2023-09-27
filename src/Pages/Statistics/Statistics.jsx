/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import {  useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";



const COLORS = ["#0088FE", "#00C49F"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
const x = cx + radius * Math.cos(-midAngle * RADIAN);
const y = cy + radius * Math.sin(-midAngle * RADIAN);

return (
<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
  {`${(percent * 100).toFixed(0)}%`}
</text>
);
};
const Statistics = () => {
    const cards = useLoaderData();
    let totalDonation = cards.length;
   
    const donateItems = JSON.parse(localStorage.getItem("donate"));
    // let yourDonation = donateItems ? donateItems.length : 0;
    // let yourPercentage = ((yourDonation / totalDonation)* 100).toFixed(2);
    // let remainingPercentage = (100 - yourPercentage).toFixed(2);

    const data = [
      { name: "Your Donation", value: 6 },
    { name: "Total Donation", value: 6 },
    ];
    return (
        
      
        <ResponsiveContainer width="70%" height="80%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          
        >
          {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </ResponsiveContainer>
   
    );         
};

export default Statistics;


