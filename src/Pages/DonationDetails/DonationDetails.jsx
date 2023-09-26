/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import swal from "sweetalert";


const DonationDetails = ({ card }) => {
    const { id, picture, title,category, category_bg,text_button_bg,card_bg, price, description, } = card || {};

    const handleAddToDonate = () => {
        const addedDonateArray = [];
        const donateItems = JSON.parse(localStorage.getItem("donate"));
        if (!donateItems) {
            addedDonateArray.push(card);
            localStorage.setItem("donate", JSON.stringify( addedDonateArray));
            swal("Good job!", "Donate added successfully in donation section.", "success");
        }
        else {
            const isExits = donateItems.find((card) => card.id === id);
           
            
            if (!isExits) {
      
                addedDonateArray.push(...donateItems, card);
              localStorage.setItem("donate", JSON.stringify(addedDonateArray));
              swal("Good job!", "Donate added successfully in donation section.", "success");
             
            } else {
              swal("Sorry!", "Already added this card !", "error");
            }
      
      
          }
      
    };

    return (
        <div>
            <div className="relative ">
                <div className="flex justify-center items-center ">
                    <img src={picture} alt="" className=" bg-cover   rounded-3xl mt-12 w-auto h-18     lg:w-10/12 h-[540px]  " />
                </div>
                <div className=" absolute bottom-0 rounded-b-3xl bg-black bg-opacity-50 p-8  transition-opacity  opacity-100 
                 left-0 right-0 mx-0  lg:ml-28 lg:mr-28">
                 
                  

                    <button onClick={handleAddToDonate} className="text-xl font-semibold text-white px-4 py-2 rounded " style={{ backgroundColor: text_button_bg }}>Donate ${price}</button>
                </div>
            </div>
            <h1 className="text-4xl font-bold ml-12  my-10 md:mx-32   lg:mx-32  " style={{ color: text_button_bg }} >{title}</h1>
            <p className="text-base font-normal text-[#0b0b0bb2] mx-12 mb-16 md:mx-32  lg:mx-32">{description}</p>

        </div>


    );
};

export default DonationDetails;