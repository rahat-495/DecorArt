
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CraftItemSec = () => {
    
    const cards = useLoaderData() ;
    const [cardslength , setLength] = useState(6) ;

    return (
        <div>
            <div className="flex flex-col items-center mx-auto justify-center mb-20 p-10">
                <Fade direction="up" duration={100} delay={0}>
                  <h1 className="text-3xl font-semibold pop my-10">Craft Items</h1>
                </Fade>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        cards.slice(0 , cardslength).map(card => <Fade 
                        direction="left"
                        delay={200}
                        key={card._id}><div className="card border p-6">
                        <figure><img className="w-full rounded-xl h-[250px]" src={card.image} /></figure>
                        <div className="card-body p-0 pt-4">
                          <h2 className="card-title">
                            {card.itemName}
                          </h2>
                          <p className="gro text-lg">{card.shortDesc}</p>
                          <div className="card-actions grid grid-cols-2 gap-8">
                            <div className="badge badge-outline w-full">
                                <h1 className="font-semibold gro">Price : <span className="font-medium ml-3"> {card.price}</span></h1>
                            </div> 
                            <div className="badge badge-outline w-full">
                                <h1 className="font-semibold gro flex items-center justify-center">Rating : <span className="font-medium ml-3 items-center justify-center flex gap-1"> {card.rating} <FaStar className="text-yellow-600"/></span></h1>
                            </div>
                          </div>
                          <Link to={`/cardsDetails/${card._id}`}>
                            <Button className="mt-4 w-full btn hover:btn-ghost hover:border">View Details</Button>
                          </Link>
                        </div>
                      </div> </Fade>)
                    }
                </div>
                <div className="flex items-center justify-center gap-6">
                  <Fade direction="up" delay={300}>
                    <Button onClick={() => setLength(cardslength+6)} className="my-10">View More</Button>
                  </Fade>
                </div>
            </div>
        </div>
    );
};

export default CraftItemSec;
