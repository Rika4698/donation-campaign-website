/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";
import { useState } from "react";



const Home = () => {
const [showCards,setShowCards] = useState([]);
const cards = useLoaderData();





    return (
        <div>
           <Banner></Banner>
           <Cards cards = {cards}></Cards>
        </div>
    );
};

export default Home;