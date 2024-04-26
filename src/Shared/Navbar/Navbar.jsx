
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

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
        className={`p-1 font-normal font-gro`}
      >
        <NavLink to={"/"} className="flex items-center">
          Home
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal gro"
      >
        <NavLink to={"/allArt"} href="#" className="flex items-center">
          All Art & craft Items
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal gro"
      >
        <NavLink to={"/addItem"} className="flex items-center">
          Add Craft Item
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal gro"
      >
        <NavLink to={"/myList"} className="flex items-center">
          My Art&Craft List
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="mx-auto">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-8 py-2 lg:px-12 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
            Material Tailwind
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
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
          {navList}
          <div className="flex items-center gap-x-1">
            <Link to={"/login"} className="">
              <Button
                className="border hover:bg-[#343434] border-[#343434] hover:text-white"
                variant="text"
                size="sm"
              >
                Log In
              </Button>
            </Link>

            <Link to={"/register"} className="">
              <Button
                className="hover:bg-none border border-[#343434] hover:shadow-none hover:text-gray-800"
                variant="gradient"
                size="sm"
              >
                Register
              </Button>
            </Link>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Nav;
