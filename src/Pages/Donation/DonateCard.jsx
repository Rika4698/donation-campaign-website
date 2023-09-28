/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const DonateCard = ({ card }) => {

    const { id, picture, title, category, category_bg, card_bg, text_button_bg, price, description } = card || {};



    return (
        <div className="flex justify-center items-center">
            <div className="card w-auto mt-8 md:card-side md:w-[600px] md:h-[200px] lg:card-side  " style={{ backgroundColor: card_bg, color: text_button_bg }}>

                <figure className="w-auto md:w-[330px] md:rounded-l-xl"><img src={picture} alt="" /></figure>
                <div className="card-body pt-4">
                    <h2 className="card-title m-0 w-16 p-1 text-xs font-normal justify-center rounded-md" style={{ backgroundColor: category_bg }}>{category}</h2>
                    <h2 className="font-extrabold text-base ">{title}</h2>
                    <h3>${price}.00</h3>
                    <div className="card-actions"> <Link to={`/cards/${id}`}>
                        <button className=" rounded capitalize text-lg font-semibold text-white py-2.5 px-4" style={{ backgroundColor: text_button_bg }}>View Details</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonateCard;