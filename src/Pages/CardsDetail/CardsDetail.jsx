
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const CardsDetail = () => {
    
    const data = useLoaderData() ;

    return (
        <div className="w-[1440px] mx-auto">
            <div className="my-20 flex-col mt-[250px] px-10 min-h-[55vh] flex justify-between gap-5 lg:flex-row">
                <div className="w-full lg:w-1/2 rounded-lg">
                    <img data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" className="rounded-lg w-[26%] h-[20%] md:w-2/4 md:h-[400px] lg:w-4/5" src={data?.image} alt="" />
                </div>

                <div className="lg:w-1/2 ">
                    <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" className="text-xl md:text-3xl lg:text-3xl font-semibold pop">Item Name : {data?.itemName}</h1>

                    <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" className="text-xl md:text-2xl lg:text-2xl mt-2 font-medium pop">Sub Categorie : {data?.subName}</h1>

                    <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" className="my-5 rounded-lg  w-[350px] md:w-[600px] lg:w-auto flex lg:text-xl ">
                        <span className="font-bold lg:w-auto"></span>
                        {data?.shortDesc}
                    </p>

                    <div className="flex gap-3 my-5 flex-col">
                        <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400" > Customization :<span className="font-medium"> {data.customization} </span> </p>
                        <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" > <span className="font-medium">Price : ${data.price}</span> </p>
                        <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600" > <span className="font-medium flex gap-3 relative">Rating : {data.rating} <FaStar className="text-yellow-600 absolute left-[85px] top-[2px]"/></span> </p>
                        <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700" > <span className="font-medium">Processing Time : {data.processing} minute</span> </p>
                        <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700" > <span className="font-medium">Stock-Status : {data.stockStatus}</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardsDetail;
