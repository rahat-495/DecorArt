import { Tooltip } from "@material-tailwind/react";

const Tranding = () => {
    return (
        <div className="flex items-center justify-center flex-col my-14">
            <h1 className="text-3xl gro font-semibold my-10">Tranding Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">

                <Tooltip content='Voluptas Nulla Pariatur'>
                    <img className='w-40 md:w-52 lg:w-64 cursor-pointer rounded-md' src="https://opencart.templatetrip.com/OPC07/OPC203_decorart/OPC05/image/cache/catalog/demo/product/06-270x351.jpg" alt="" />
                </Tooltip>
                
                <Tooltip content='Voluptas Nulla Esse'>
                    <img className='w-40 md:w-52 lg:w-64 cursor-pointer rounded-md' src="https://opencart.templatetrip.com/OPC07/OPC203_decorart/OPC05/image/cache/catalog/demo/product/05-270x351.jpg" alt="" />
                </Tooltip>
                
                <Tooltip content='Magni Dolores Eosquies'>
                    <img className='w-40 md:w-52 lg:w-64 cursor-pointer rounded-md' src="https://opencart.templatetrip.com/OPC07/OPC203_decorart/OPC05/image/cache/catalog/demo/product/19-270x351.jpg" alt="" />
                </Tooltip>

                <Tooltip content='Aspetur Autodit Art'>
                    <img className='w-40 md:w-52 lg:w-64 cursor-pointer rounded-md' src="https://opencart.templatetrip.com/OPC07/OPC203_decorart/OPC05/image/cache/catalog/demo/product/12-270x351.jpg" alt="" />
                </Tooltip>

                <Tooltip content='Aliquam Quaerat Voluptam'>
                    <img className='w-40 md:w-52 lg:w-64 cursor-pointer rounded-md lg:hidden' src="https://opencart.templatetrip.com/OPC07/OPC203_decorart/OPC05/image/cache/catalog/demo/product/18-270x351.jpg" alt="" />
                </Tooltip>

                <Tooltip content='Voluptas Sit Aspernatur'>
                    <img className='w-40 md:w-52 lg:w-64 cursor-pointer rounded-md lg:hidden' src="https://opencart.templatetrip.com/OPC07/OPC203_decorart/OPC05/image/cache/catalog/demo/product/07-270x351.jpg" alt="" />
                </Tooltip>

            </div>
        </div>
    );
};

export default Tranding;
