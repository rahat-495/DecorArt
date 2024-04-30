
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { MdAccessTime } from "react-icons/md";

const MyLIst = () => {

    const {user} = useContext(AuthContext) ;
    const [ cards , setCards ] = useState([]) ;
    const [filter , setFilter] = useState([]) ;
    const [loading , setLoading] = useState(false) ;

    useEffect(() => {
        setLoading(true) ;
        fetch(`https://assignment-10-server-sandy-one.vercel.app/myList/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setCards(data) ;
            setLoading(false) ;
            setFilter(data) ;
        })
    } , [user])

    if(loading){
      return <span className="loading min-h-[100vh] mx-auto min-w-[20%] flex items-center justify-center loading-spinner loading-lg"></span>
    }

    const handleDelete = (id) => {

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Item has been deleted.",
            icon: "success"
          });

          fetch(`https://assignment-10-server-sandy-one.vercel.app/myListDelete/${id}` , {
            method : 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.acknowledged){
              const remaining = cards.filter(card => card._id !== id)
              setFilter(remaining) ;
              setCards(remaining) ;
            }
          })

        }
      });
    }

    const handleYesNo = (any) => {
      // console.log(cards , any);
      if(any === 'yes'){
        const remaining = cards.filter(card => card.customization === any) ;
        setFilter(remaining);
      }
      else if(any === 'no'){
        const remaining = cards.filter(card => card.customization === any) ;
        setFilter(remaining);
      }
      else{
        setFilter(cards)
      }
    }

    return (
        <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col items-center mx-auto justify-center mb-20 p-10">
                <h1 className="text-3xl font-semibold pop my-10">My Added Items</h1>
                
                <details className="dropdown mb-14">
                  <summary className="m-1 btn">Filter</summary>
                  <ul className="p-2 gap-3 shadow menu dropdown-content z-[1] bg-gray-700 rounded-box w-52">
                    <Button className="btn btn-outline" onClick={() => handleYesNo('all')}>All</Button>
                    <Button className="btn btn-outline" onClick={() => handleYesNo('yes')}>Yes</Button>
                    <Button className="btn btn-outline" onClick={() => handleYesNo('no')}>No</Button>
                  </ul>
                </details>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {
                        filter.map(card => <div key={card._id} className="card border p-6">
                        <figure><img className="w-full rounded-xl h-[250px]" src={card.image} /></figure>
                        <div className="card-body p-0 pt-4">
                          <h2 className="card-title">
                            {card.itemName}
                          </h2>
                          <p className="gro text-lg">Customization : {card.customization}</p>
                          <p className="gro text-lg">Stock Status : {card.stockStatus}</p>
                          <div className="card-actions grid  grid-cols-2">
                            <div className="badge badge-outline w-full">
                                <h1 className="font-semibold gro">Price : <span className="font-medium ml-3">$ {card.price}</span></h1>
                            </div> 
                            <div className="badge badge-outline w-full">
                                <h1 className="font-semibold gro flex items-center justify-center">Rating : <span className="font-medium ml-5 items-center justify-center flex gap-1"> {card.rating} <FaStar className="text-yellow-600"/></span></h1>
                            </div>
                          </div>
                            <div className="badge badge-outline w-full">
                                <h1 className="font-semibold gro flex items-center justify-center">Processing Time : <span className="font-medium ml-5 items-center justify-center flex gap-1"> {card.processing} <MdAccessTime/> Minute </span></h1>
                            </div>
                          <div className="flex gap-5">
                            <Button onClick={() => handleDelete(card._id)} className="mt-4 bg-red-900 w-[180px] ">DeleTe</Button>
                            <Link to={`/update/${card._id}`}>
                              <Button className="mt-4 w-[180px] bg-gray-700">Update</Button>
                            </Link>
                          </div>
                        </div>
                      </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyLIst;
