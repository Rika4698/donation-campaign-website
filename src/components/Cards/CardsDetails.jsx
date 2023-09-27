/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const CardsDetails = ({ card }) => {
    const {id,picture,category,title,card_bg,category_bg,text_button_bg} = card || {};

    return (
        <div>
            <Link to={`/cards/${id}`}>
            <div className="card my-4 w-[300px]  xl:w-[290px] lg:w-[222px] lg:h-[310px]   " style={{backgroundColor: card_bg,color:text_button_bg}}>
                <figure className="h-[188px] xl:h-[208px] xl:w-auto lg:w-[222px] lg:h-[140px] "><img src={picture} alt="" /></figure>
                <div className="card-body m-0">
                    <h3 className="card-title w-20 p-2  justify-center rounded-md text-sm font-medium " style={{backgroundColor: category_bg}}>
                        {category}

                    </h3>
                    <h2 className="text-lg font-bold mt-4">{title}</h2>

                </div>
            </div>
            </Link>
        </div>
    );
};

export default CardsDetails;