import { useState } from "react";


const DonationDetails = ({ card }) => {
    const { id, picture, title, text_button_bg, price, description } = card || {};

    return (
        <div>
            <div className="relative">
                <div className="flex justify-center items-center ">
                    <img src={picture} alt="" className=" bg-cover   rounded-3xl mt-12 w-55 h-18     lg:w-[80%] h-[540px]  " />
                </div>
                <div className="absolute bottom-0 left-32 right-32  rounded-b-3xl bg-black bg-opacity-50 p-8 mx-2  transition-opacity  opacity-100 ">

                    <button className="text-xl font-semibold text-white px-4 py-2 rounded " style={{ backgroundColor: text_button_bg }}>Donate ${price}</button>
                </div>
            </div>
            <h1 className="text-4xl font-bold mx-32 my-10" style={{ color: text_button_bg }} >{title}</h1>
            <p className="text-base font-normal text-[#0b0b0bb2] mx-32 mb-16">{description}</p>

        </div>


    );
};

export default DonationDetails;