import { useEffect, useState } from "react";
import DonateCard from "./DonateCard";




const Donation = () => {
    const [donate, setDonate] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false);
    useEffect(() => {

        const donateItems = JSON.parse(localStorage.getItem("donate"));
        
        if (donateItems) {
            setDonate(donateItems);
        }
        else {
            setNoFound("No Data Found");

        }
        


    }, []);




    return (

        <div>
            {noFound ?
                <h1 className="h-[80vh] flex justify-center items-center font-bold text-4xl">{noFound}</h1> :
                <div>
                    <div className="grid grid-cols-1 mb-6 md:grid-cols-1 lg:grid-cols-2 gap-4">
                        {
                            isShow ? donate.map((card) => (
                                <DonateCard key={card.id} card={card}></DonateCard>

                            ))
                                : donate.slice(0, 4).map((card) => (
                                    <DonateCard key={card.id} card={card}></DonateCard> ) )
                        }

                    </div>
                   

                    



                    {donate.length > 4 && <div className={isShow ? 'hidden' : ''}>  <button onClick={() => setIsShow(!isShow)} className="btn capitalize text-base font-semibold text-white bg-indigo-700 block mx-auto px-10 mb-16">
                        See All
                    </button>

                    </div>}



                </div>}



        </div>


    );
};

export default Donation;