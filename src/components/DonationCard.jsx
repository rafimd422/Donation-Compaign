import { Link } from "react-router-dom";

const DonationCard = ({data}) => {

const {picture,card_bg,text_button_bg,category,title,category_bg,price,id} = data;

const style ={
    backgroundColor: card_bg,
    color:text_button_bg
}
const categoryStyle = {
    backgroundColor:category_bg
}
const btnStyle = {
    backgroundColor:text_button_bg
}

  return (
    <div style={style} className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
    <img
      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      src={picture}
      alt=""
    />
    <div className="flex flex-col justify-between p-2 leading-normal">
    <div className="p-4">
            <p style={categoryStyle} className="text-sm font-medium rounded m-2 px-3 py-2 w-fit">{category}</p>
        <h5 className="mb-1 p-1 text-xl font-semibold tracking-tight text-black">{title}</h5>
        <p className="ms-2">${price}.00</p>
        </div>
<Link to={`/donationDetails/:${id}`} style={btnStyle} className="w-fit ms-5 p-2 rounded-lg text-white View Details">View Details</Link>
    </div>
  </div>
  )
}

export default DonationCard
