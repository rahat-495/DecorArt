
import { useEffect, useState } from "react";
import Banner from "./Banner";
import CategoriesSec from "./CategoriesSec";
import CraftItemSec from "./CraftItemSec";
import Discount from "./Discount";
import Tranding from "./Tranding";

const Home = () => {

    const [loading , setLoading] = useState(false) ;

    useEffect(() => {
        setLoading(true) ;
        fetch(`http://localhost:5555/addCraftItem`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setLoading(false)
        })
    } , [])

    if(loading){
        return <span className="loading min-h-[100vh] mx-auto min-w-[20%] flex items-center justify-center loading-spinner loading-lg"></span>
    }

    return (
        <div className="lg:max-w-[1440px] lg:mx-auto">
            <Banner></Banner>
            <CraftItemSec></CraftItemSec>
            <CategoriesSec></CategoriesSec>
            <Tranding></Tranding>
            <Discount></Discount>
        </div>
    );
};

export default Home;
