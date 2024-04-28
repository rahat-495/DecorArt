import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-5xl md:text-6xl lg:text-8xl gro font-semibold ">Opps !!!</h1>
            <div className="">
                <img className="w-2/3 h-2/3 mx-auto" src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?w=996&t=st=1714321052~exp=1714321652~hmac=ce8c9f212b802f23ba72541a8c48540fe4997205ed48a673854ea363180b2403" alt="" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl gro font-semibold text-center mb-8">Page Not Found </h1>
            <h1 className="text-3xl md:w-[500px] lg:w-[500px] mb-8 gro font-semibold text-center">Looks like you have wandered into uncharted decor territory.</h1>
            <Link to={'/'}>
                <Button>Go Back</Button>
            </Link>
        </div>
    );
};

export default Error;
