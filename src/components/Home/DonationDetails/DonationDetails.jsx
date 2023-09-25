import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const idString = id.slice(1);
  const parsedId = parseInt(idString);

  const getData = data.find(idividualData => parsedId === idividualData.id);
  const { picture, title, description, text_button_bg, price } = getData;
  const style = {
    backgroundColor: text_button_bg
  };

  const toastify = () => {
    toast.success(`You're successfully donated $${price}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <figure className="relative lg:mx-60 md:mx-40 mx-30">
        <img src={picture} className="w-full object-contain rounded-lg my-8 mx-auto" />
        <figcaption>
          <div className="absolute bottom-0 backdrop-brightness-50 bg-opacity-50 opacity-100 w-full py-4">
            <button onClick={toastify} style={style} className="ms-6 left-6 bottom-4 px-6 py-4 text-xl font-semibold rounded text-white">Donate ${price}</button>
          </div>
        </figcaption>
      </figure>

      <div className="container mx-auto">
        <h2 className="text-neutral-950 md:text-4xl mx-2 text-3xl font-bold">{title}</h2>
        <p className="text-justify my-6 mb-24">{description}</p>
      </div>
      <ToastContainer />
    </>
  );
};

export default DonationDetails;
