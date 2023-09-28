import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";
import { useState } from "react";
const Home = () => {
    const cards = useLoaderData();
    const [searchCategory, setSearchCategory] = useState("");
  const [filteredCards, setFilteredCards] = useState(cards);


const handleSearch = () => {
    const filtered = cards.filter((card) =>
    card.category.toLowerCase().includes(searchCategory.toLowerCase())
  );
  setFilteredCards(filtered);
  };

    return (
        <div>
        <div>
           <Banner setSearchCategory={setSearchCategory} 
           handleSearch={handleSearch}></Banner>
        </div>
        <div>
        <Cards cards={filteredCards}></Cards>
        </div>
        </div>
    );
};

export default Home;