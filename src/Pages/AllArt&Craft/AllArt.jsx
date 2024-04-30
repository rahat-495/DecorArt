
import { Button } from "@material-tailwind/react";
import { Link, useLoaderData } from "react-router-dom";
import { Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const AllArt = () => {
  
  const [loading , setLoading] = useState(false) ;
  const cards = useLoaderData();

  useEffect(() => {
    setLoading(true) ;
    fetch(`https://assignment-10-server-sandy-one.vercel.app/addCraftItem`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setLoading(false)
    })
  } , [])

  if(loading){
      return <span className="loading min-h-[100vh] mx-auto min-w-[20%] flex items-center justify-center loading-spinner loading-lg"></span>
  }

  const TABLE_HEAD = ["Item Name", "Sub Categorie" , "Rating", "Price", ""];

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center mx-auto justify-center mb-20 p-10">
        <Fade direction="up">
          <h1 className="text-3xl font-semibold pop my-10">All Craft Items</h1>
        </Fade>
        
          <Card className="h-full w-full overflow-scroll md:overflow-hidden lg:overflow-hidden">

            <Fade direction="up" delay={200}>
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cards.map((card , index) => (
                    <tr key={index} className="even:bg-blue-gray-50/50">
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {card.itemName}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {card.subName}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {card.rating}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          ${card.price}
                        </Typography>
                      </td>
                      <td className="flex items-center pt-2 justify-end pr-4">
                        <Link to={`/cardsDetails/${card._id}`}><Button>View Details</Button></Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Fade>

          </Card>
      </div>
    </div>
  );
};

export default AllArt;
