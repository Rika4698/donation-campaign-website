/* eslint-disable react/prop-types */

import CardsDetails from "./CardsDetails";
const Cards = ({ cards }) => {
    
    return (
        <div className="grid grid-cols-1 ml-16 mb-24 mt-20   md:grid-cols-2  lg:grid-cols-4 xl:grid-cols-4 mr-6 ">
            {
                cards?.map(card =><CardsDetails key={card.id} card={card}></CardsDetails>
                 )
            }
        </div>
    );
};

export default Cards;