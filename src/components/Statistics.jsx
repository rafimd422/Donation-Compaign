import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getDonation } from './Home/utility/localstorage'
import { PieChart, Pie, Tooltip } from 'recharts';



const Statistics = () => {
    const [mainData, setMainData] = useState([])
    const [value, setValue] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const data = useLoaderData()

    useEffect(()=>{
        const storedData = getDonation()
        if(data.length > 0){
        const filteredData = data.filter(mainData => storedData.includes(mainData.id))
        setMainData(filteredData)
        const mapedData = mainData.map(data => data.price)
        const sum = mapedData.reduce((acc, current) => acc + current, 0);
        const totalValue = 2980;
        setTotalPrice(totalValue)
        const percentAge = (sum/totalPrice)*100
        setValue(percentAge)
    }
     },[])
 const chartData = [
    {name:'Your Donation' , value: `${value}%`},
    {name:'Total Donation', value: totalPrice}
]

  return (
<div className='text-center mx-auto'>
<PieChart width={760} height={270} className='mx-auto' >
  <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
  <Tooltip />
</PieChart>
<span >Total Donation  <span className='bg-[#82ca9d] text-[#82ca9d] rounded-sm w-4 h-1'>---   .</span> </span>
<span>Your Donation  <span className='bg-[#8884d8] text-[#8884d8] rounded-sm w-4 h-1'>---   .</span> </span>

</div>
  )
}

export default Statistics
