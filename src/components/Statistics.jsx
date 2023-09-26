import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getDonation } from './Home/utility/localstorage';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const [mainData, setMainData] = useState([]);
  const [allData, setAllData] = useState([])

  const jsonData = useLoaderData();

  useEffect(() => {

fetch('donation.json')
.then(res => res.json())
.then(allJsonData => setAllData(allJsonData))



    const storedData = getDonation();
    if (jsonData.length > 0) {
      const filteredData = jsonData.filter((data) => storedData.includes(data.id));
      setMainData(filteredData);
    }
  }, []);

  const mainDataLength = mainData.length;
  const allDataLength = allData.length;

  const data = [
    { name: 'Your Donation', value: mainDataLength },
    { name: 'Total Donation', value: allDataLength },
  ];

  const COLORS = ['#FF0000', '#00C49F'];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="text-center mx-auto">
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <span className='me-4'>Total Donation  <span className='bg-[#00C49F] text-[#00C49F] rounded-sm w-4 h-1'>---   .</span> </span>
      <span>Your Donation  <span className='bg-[#FF0000] text-[#FF0000] rounded-sm w-4 h-1'>---   .</span> </span>
    </div>
  );
};

export default Statistics;
