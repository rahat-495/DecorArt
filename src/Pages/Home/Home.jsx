
import Banner from "./Banner";
import CategoriesSec from "./CategoriesSec";
import CraftItemSec from "./CraftItemSec";
import Discount from "./Discount";
import Tranding from "./Tranding";

const Home = () => {
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
