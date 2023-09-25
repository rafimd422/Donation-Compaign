import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { picture, card_bg,text_button_bg,category,category_bg,title,id } = card;
const style ={
    backgroundColor: card_bg,
    color:text_button_bg
}
const categoryStyle = {
    backgroundColor:category_bg
}


    return (
      <Link to={`/donationDetails/:${id}`}>
      <div style={style} className="max-w-sm border border-gray-200 rounded-lg shadow dark:border-gray-700">
        
        <img className="rounded-t-lg h-56 w-full object-cover" src={picture} alt="" />
        <div className="p-4">
            <p style={categoryStyle} className="text-sm font-medium rounded m-2 px-3 py-2 w-fit">{category}</p>
        <h5 className="mb-2 p-1 text-xl font-semibold tracking-tight">{title}</h5>
        </div>
      </div>
      </Link>
    );
  };
  
  export default Card;
  