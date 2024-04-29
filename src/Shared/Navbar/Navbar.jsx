
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

const Nav = () => {

  const [openNav, setOpenNav] = useState(false);
  const { user , logOut } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 font-normal gro text-md`}
      >
        <NavLink to={"/"} className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "font-bold" : ""
        }>
          Home
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal gro text-md"
      >
        <NavLink to={"/allArt"} href="#" className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "font-bold" : ""
        }>
          All Art & craft Items
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal gro text-md"
      >
        <NavLink to={"/addCraftItem"} className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "font-bold" : ""
        }>
          Add Craft Item
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal gro text-md"
      >
        <NavLink to={"/myList"} className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "font-bold" : ""
        }>
          My Art&Craft List
        </NavLink>
      </Typography>
    </ul>
  );

  const handleLogOut = () => {
    logOut()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="mx-auto">
      <Navbar className="sticky top-0 z-10 h-max max-w-full shadow-none rounded-none px-8 py-2 lg:px-8 lg:py-5 lg:max-w-[1440px] lg:mx-auto">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography className="mr-4 text-2xl cursor-pointer font-semibold py-1.5">
            Decor Art
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="">
              {user ? (
                <div className="">
                  
                  <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className=" m-1 hidden lg:flex">
                      <img
                        className="w-[45px] h-[45px] rounded-full hidden lg:flex"
                        src={user?.photoURL}
                        alt=""
                      />
                      </div>
                    <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                      <h1 className="m-1 shadow-sm p-1 rounded-md font-semibold">{user?.displayName}</h1>
                      <h1 className="m-1 shadow-sm p-1 rounded-md font-semibold">{user?.email}</h1>
                      <Button onClick={handleLogOut} className="my-2 w-full">Log Out</Button>
                    </div>
                  </div>
                  
                </div>
              ) : (
                <div className="flex items-center gap-x-1">
                  <Link to={"/login"} className="hidden lg:inline-block">
                    <Button
                      className="border-2 hover:bg-[#343434] border-[#343434] hover:text-white"
                      variant="text"
                      size="sm"
                    >
                      Log In
                    </Button>
                  </Link>

                  <Link to={"/register"} className="hidden lg:inline-block">
                    <Button
                      className="hover:bg-none border-2 border-[#343434] hover:shadow-none hover:text-gray-800"
                      variant="gradient"
                      size="sm"
                    >
                      Register
                    </Button>
                  </Link>
                </div>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          
          <div className="flex items-center gap-x-1">
            <div className="">
              {user ? (
                <div className="">
                  <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className=" m-1">
                      <img
                        className="w-[45px] h-[45px] rounded-full flex lg:hidden"
                        src={user?.photoURL}
                        alt=""
                      />
                      </div>
                    <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                      <h1 className="m-1 text-gray-900 shadow-md rounded-md p-1 font-semibold">{user?.displayName}</h1>
                      <h1 className="m-1 text-gray-900 shadow-md rounded-md p-1 font-semibold">{user?.email}</h1>
                      <Button onClick={handleLogOut} className="my-2 w-full">Log Out</Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-x-1">
                  <Link to={"/login"} className="">
                    <Button
                      className="border-2 hover:bg-[#343434] border-[#343434] hover:text-white"
                      variant="text"
                      size="sm"
                    >
                      Log In
                    </Button>
                  </Link>

                  <Link to={"/register"} className="">
                    <Button
                      className="hover:bg-none border-2 border-[#343434] hover:shadow-none hover:text-gray-800"
                      variant="gradient"
                      size="sm"
                    >
                      Register
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {navList}
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Nav;
