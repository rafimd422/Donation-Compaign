import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getDonation } from './Home/utility/localstorage'
import DonationCard from './DonationCard'

const Donation = () => {

const [mainData, setMainData] = useState([])
const [showAll, setShowAll] = useState(true)

    const data = useLoaderData()
 useEffect(()=>{
    const storedData = getDonation()
    if(data.length > 0){
    const filteredData = data.filter(mainData => storedData.includes(mainData.id))
    setMainData(filteredData)
}
 },[])

  return (
  <>
  <div className="flex mx-auto mt-8">
<div className='md:grid md:grid-cols-2 flex gap-6 mx-auto justify-center flex-wrap'>
{showAll ?
mainData.slice(0,4).map(data => <DonationCard key={data.id} data = {data} />) 
: mainData.slice(0).map(data => <DonationCard key={data.id} data = {data} />) 
}
</div>
</div>
<br /> <br />
<div className='w-full text-center'>
<button onClick={()=> setShowAll(!showAll)} className={`text-white p-3 bg-green-600 rounded-lg ${ mainData.length <= 4 || showAll === false ? 'hidden' : '' }`}>Show All</button>
</div>
</>
  )
}

export default Donation
