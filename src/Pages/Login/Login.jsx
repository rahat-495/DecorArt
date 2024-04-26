
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center`}>
      <Card className="w-96 pt-11 shadow-none border">
        
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Log In
          </Typography>
        </CardHeader>

        <CardBody className="flex flex-col gap-4">
            <form className="flex flex-col gap-4">
                <Input required name="name" label="Email" size="lg" />
                <Input required name="email" label="Password" size="lg" />
                <div className="-ml-2.5">
                    <Checkbox label="Remember Me" />
                </div>
                <input type="submit" className="w-full btn btn-outline hover:bg-[#343434]" value={'Log In'} />
                <div className="divider">OR</div>
                <div className="w-full border border-[#343434] py-2 rounded-lg flex items-center justify-evenly">
                    <Button className="text-lg"><FaGoogle /></Button>
                    <Button className="text-lg"><FaFacebook /></Button>
                    <Button className="text-lg"><FaGithub /></Button>
                </div>
            </form>
        </CardBody>

        <CardFooter className="pt-0">
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Link to={'/register'}>
                <Typography
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                >
                Register
                </Typography>
            </Link>
          </Typography>
        </CardFooter>

      </Card>
    </div>
  );
};

export default Login;
