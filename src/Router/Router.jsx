
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
        loader : () => fetch(`http://localhost:5555/addCraftItem`) ,
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
        loader : ({params}) => fetch(`http://localhost:5555/addCraftItem/${params.id}`)
      },
      {
        path : '/subCategorie/:id' ,
        element : <SubCategories></SubCategories> ,
      },
      {
        path : '/allArt' ,
        element : <AllArt></AllArt> ,
        loader : () => fetch(`http://localhost:5555/addCraftItem`) ,
      },
      {
        path : '/myList' ,
        element : <MyListP><MyLIst></MyLIst></MyListP>,
      },
      {
        path : '/update/:id' ,
        element : <Update></Update> ,
        loader : () => fetch(`http://localhost:5555/addCraftItem`)
      }
    ],
  },
]);

export default router;
