
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center`}>
      <Card className="w-96 pt-11 shadow-none border">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Register
          </Typography>
        </CardHeader>

        <CardBody className="flex flex-col gap-4">
          <form className="flex flex-col gap-4">
            <Input required name="name" label="Name" size="lg" />
            <Input required name="photo" label="Photo-URL" size="lg" />
            <Input required name="email" label="Email" size="lg" />
            <Input required name="Pass" label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
            <input
              type="submit"
              className="w-full btn btn-outline hover:bg-[#343434]"
              value={"Register"}
            />
          </form>
        </CardBody>

        <CardFooter className="pt-0">
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Link to={"/login"}>
              <Typography
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Login
              </Typography>
            </Link>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
