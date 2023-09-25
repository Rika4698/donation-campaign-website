import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetails from "../DonationDetails/DonationDetails";


const DonationSet = () => {
    const [card, setCard] = useState({});
    const {id} = useParams();
    const cards = useLoaderData();
    useEffect(() => {
        const findCard = cards?.find((card) => card.id == id);
       
        setCard(findCard);
  }, [id, cards]);

    return (
        <div>
            <DonationDetails card={card}></DonationDetails>
        </div>
    );
};

export default DonationSet;