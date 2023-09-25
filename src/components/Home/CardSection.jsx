import { useEffect, useState } from "react";
import Card from "./Card";

const CardSection = () => {

    const [cards, setCards] = useState([]);

useEffect(()=>{
    fetch('donation.json')
    .then(res => res.json())
    .then(data => setCards(data))
},[])
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 mx-auto gap-4 px-6 w-full justify-center my-16">
        {cards.map(card=> <Card key={card.id} card={card} />)}
    </div>
  )
}

export default CardSection
