import { useState } from 'react'
import Banner from './Banner'
import CardSection from './CardSection'
import './home.css'


  

const Home = () => {
const [search, setSearch] = useState('')
  return (
    <>
<Banner setSearch={setSearch}/>
<CardSection searchBox={search} />

</>
  )
}

export default Home
