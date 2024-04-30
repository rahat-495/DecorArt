
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

const SubCategories = () => {

    const [loading , setLoading] = useState(false) ;
    const [loadedData , setLoadedData] = useState([]) ;
    const {id} = useParams() ;
    
    useEffect(() => {
        setLoading(true) ;
        fetch(`http://localhost:5555/subCategorie/${id}`)
        .then(res => res.json())
        .then(data => {
          setLoadedData(data) ;
          setLoading(false) ;
        })
    } , [id])

    if(loading){
      return <span className="loading min-h-[100vh] mx-auto min-w-[20%] flex items-center justify-center loading-spinner loading-lg"></span> ;
    }

    return (
        <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col items-center mx-auto justify-center mb-20 p-10">
                <h1 className="text-3xl font-semibold pop my-10 hover:underline">Sub-Categories Items</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        loadedData.map(card => <div key={card._id} className="card border p-6">
                        <figure><img className="w-full rounded-xl h-[250px]" src={card.image} /></figure>
                        <div className="card-body p-0 pt-4">
                          <h2 className="card-title gro font-bold">
                            {card.itemName}
                          </h2>
                          <h2 className="font-semibold gro text-lg">
                            {card.subName}
                          </h2>
                          <p className="gro text-lg">{card.shortDesc}</p>
                          <div className="card-actions grid grid-cols-2 gap-5 justify-between">
                            <div className="badge badge-outline w-full">
                                <h1 className="font-semibold gro">Price : <span className="font-medium ml-3">$ {card.price}</span></h1>
                            </div> 
                            <div className="badge badge-outline w-full">
                                <h1 className="font-semibold gro flex items-center justify-center">Rating : <span className="font-medium ml-3 items-center justify-center flex gap-1"> {card.rating} <FaStar className="text-yellow-600"/></span></h1>
                            </div>
                          </div>
                            <div className="badge badge-outline w-full">
                                <h1 className="font-semibold gro flex items-start justify-center">Processing time : <span className="font-medium ml-5 items-center justify-center flex gap-1"> {card.processing} <MdAccessTime /> Minute</span></h1>
                            </div>
                          <Link to={`/cardsDetails/${card._id}`}>
                            <Button className="mt-4 w-full btn btn-outline hover:border">View Details</Button>
                          </Link>
                        </div>
                      </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SubCategories;
