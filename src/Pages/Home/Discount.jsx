import { Button } from "@material-tailwind/react";

const Discount = () => {
    return (
        <div>
            <div className="w-full rounded-lg min-h-[70vh] bg-cover bg-center bg-no-repeat my-20 mx-auto px-10 bg-[url('https://opencart.templatetrip.com/OPC07/OPC203_decorart/OPC05/image/catalog/demo/banners/parallax-bg.jpg')] relative">
                <div className="lg:w-1/3 flex flex-col gap-4 absolute lg:top-[30%] lg:left-[20%]">
                    <h1 className="text-white text-3xl Philo leading-[67px] ">Get Flat 40% OFF <br /><span className="text-6xl"> Go, pottry Art</span></h1>
                    <p className="text-white text-xl gro">on Your First Order also with Free Delivery</p>
                    <Button className="w-1/3">Shop Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Discount;
