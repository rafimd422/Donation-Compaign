import { useState } from 'react'
import Banner from './Banner'
import CardSection from './CardSection'
import './home.css'


  

const Home = () => {
const [search, setSearch] = useState('')

console.log(search)
  return (
    <>
<Banner setSearch={setSearch}/>
<CardSection searchBox={search} />

</>
  )
}

export default Home
