import { Fade } from "react-awesome-reveal";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Tranding = () => {
  return (
    <div className="flex items-center justify-center flex-col my-14">
      <Fade direction="up">
        <h1 className="text-3xl gro font-semibold my-10">Tranding Products</h1>
      </Fade>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        
        <Tooltip id="my-tooltip" />
        <img
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Voluptas Nulla Pariatur"
          className="w-40 md:w-52 lg:w-64 cursor-pointer rounded-md"
          src="https://opencart.templatetrip.com/OPC07/OPC203_decorart/OPC05/image/cache/catalog/demo/product/06-270x351.jpg"
          alt=""
        />

        <Tooltip id="my-tooltip2" />
        <img
          data-tooltip-id="my-tooltip2"
          data-tooltip-content="Voluptas Nulla Esse"
          className="w-40 md:w-52 lg:w-64 cursor-pointer rounded-md"
          src="https://opencart.templatetrip.com/OPC07/OPC203_decorart/OPC05/image/cache/catalog/demo/product/05-270x351.jpg"
          alt=""
        />

        <Tooltip id="my-tooltip3" />
        <img
          data-tooltip-id="my-tooltip3"
          data-tooltip-content="Magni Dolores Eosquies"
          className="w-40 md:w-52 lg:w-64 cursor-pointer rounded-md"
          src="https://opencart.templatetrip.com/OPC07/OPC203_decorart/OPC05/image/cache/catalog/demo/product/19-270x351.jpg"
          alt=""
        />

        <Tooltip id="my-tooltip4" />
        <img
          data-tooltip-id="my-tooltip3"
          data-tooltip-content="Aspetur Autodit Art"
          className="w-40 md:w-52 lg:w-64 cursor-pointer rounded-md"
          src="https://opencart.templatetrip.com/OPC07/OPC203_decorart/OPC05/image/cache/catalog/demo/product/12-270x351.jpg"
          alt=""
        />

        <Tooltip id="my-tooltip5" />
        <img
          data-tooltip-id="my-tooltip5"
          data-tooltip-content="Aliquam Quaerat Voluptam"
          className="w-40 md:w-52 lg:w-64 cursor-pointer rounded-md lg:hidden"
          src="https://opencart.templatetrip.com/OPC07/OPC203_decorart/OPC05/image/cache/catalog/demo/product/18-270x351.jpg"
          alt=""
        />

        <Tooltip id="my-tooltip6" />
        <img
          data-tooltip-id="my-tooltip6"
          data-tooltip-content="Voluptas Sit Aspernatur"
          className="w-40 md:w-52 lg:w-64 cursor-pointer rounded-md lg:hidden"
          src="https://opencart.templatetrip.com/OPC07/OPC203_decorart/OPC05/image/cache/catalog/demo/product/07-270x351.jpg"
          alt=""
        />

      </div>
    </div>
  );
};

export default Tranding;
