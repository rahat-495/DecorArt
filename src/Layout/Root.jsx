
import { Outlet } from "react-router-dom";
import Nav from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
    return (
        <div className="overflow-x-hidden">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
