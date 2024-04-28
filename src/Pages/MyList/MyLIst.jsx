
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const MyLIst = () => {

    const {user} = useContext(AuthContext) ;
    const [ cards , setCards ] = useState([]) ;

    useEffect(() => {
        fetch(`http://localhost:5555/myList/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCards(data) ;
        })
    } , [user])

    return (
        <div>
            <div className="flex flex-col items-center mx-auto justify-center mb-20 p-10">
                <h1 className="text-3xl font-semibold pop my-10">My Added Items</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        cards.map(card => <div key={card._id} className="card border p-6">
                        <figure><img className="w-full rounded-xl h-[250px]" src={card.image} /></figure>
                        <div className="card-body p-0 pt-4">
                          <h2 className="card-title">
                            {card.itemName}
                          </h2>
                          <p className="gro text-lg">{card.shortDesc}</p>
                          <div className="card-actions">
                            <div className="badge badge-outline">
                                <h1 className="font-semibold gro">Price : <span className="font-medium ml-3"> {card.price}</span></h1>
                            </div> 
                            <div className="badge badge-outline">
                                <h1 className="font-semibold gro flex items-center justify-center">Rating : <span className="font-medium ml-5 items-center justify-center flex gap-1"> {card.rating} <FaStar className="text-yellow-600"/></span></h1>
                            </div>
                          </div>
                          <Link to={`/cardsDetails/${card._id}`}>
                            <Button className="mt-4 btn hover:btn-ghost hover:border">View Details</Button>
                          </Link>
                        </div>
                      </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyLIst;
