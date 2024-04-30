
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddCraft from "../Pages/AddCraft/AddCraft";
import AddCraftP from "../Private/AddCraftP";
import CardsDetail from "../Pages/CardsDetail/CardsDetail";
import CardsDetailP from "../Private/CardsDetailP";
import MyListP from "../Private/MyListP";
import SubCategories from "../Pages/SubCategories/SubCategories";
import AllArt from "../Pages/AllArt&Craft/AllArt";
import MyLIst from "../Pages/MyList/MyLIst";
import Update from "../Pages/Update/Update";
import UpdateP from "../Private/UpdateP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
        loader : () => fetch(`https://assignment-10-server-sandy-one.vercel.app/addCraftItem`) ,
      },
      {
        path : '/login' ,
        element : <Login></Login>,
      },
      {
        path : '/register' ,
        element : <Register></Register> ,
      },
      {
        path : '/addCraftItem' ,
        element : <AddCraftP><AddCraft></AddCraft></AddCraftP>
      },
      {
        path : '/cardsDetails/:id' ,
        element : <CardsDetailP><CardsDetail></CardsDetail></CardsDetailP> ,
        loader : ({params}) => fetch(`https://assignment-10-server-sandy-one.vercel.app/addCraftItem/${params.id}`)
      },
      {
        path : '/subCategorie/:id' ,
        element : <SubCategories></SubCategories> ,
      },
      {
        path : '/allArt' ,
        element : <AllArt></AllArt> ,
        loader : () => fetch(`https://assignment-10-server-sandy-one.vercel.app/addCraftItem`) ,
      },
      {
        path : '/myList' ,
        element : <MyListP><MyLIst></MyLIst></MyListP>,
      },
      {
        path : '/update/:id' ,
        element : <UpdateP><Update></Update></UpdateP> ,
        loader : () => fetch(`https://assignment-10-server-sandy-one.vercel.app/addCraftItem`)
      }
    ],
  },
]);

export default router;
