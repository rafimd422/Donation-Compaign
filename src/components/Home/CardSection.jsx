import { useEffect, useState } from "react";
import Card from "./Card";

const CardSection = ({ searchBox }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('donation.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, []);

  const filteredCards = cards.filter(card => {
    if (searchBox === '') {
      return true;
    } else{
    return card.category.toLowerCase().includes(searchBox.toLowerCase())}
  });

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 mx-auto gap-4 px-6 w-full justify-center my-16">


      {filteredCards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardSection;
