
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const CategoriesSec = () => {

    return (
        <div className="my-10">
            <div className="flex flex-col items-center justify-center">
                <Fade direction="up">
                    <h1 className="text-3xl font-semibold pop my-10">Art & Craft Categories</h1>
                </Fade>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    <Fade direction="left">
                        <Link to={'/subCategorie/Clay-Made-Pottry'}>
                            <Card className="mt-6 mx-5 w-auto lg:w-96 shadow-none border pt-10">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img
                                src="https://images.squarespace-cdn.com/content/v1/5d97bf677e4d3c11df6d859c/1673297209937-VTBHDHDPTIKJ63U3H6GU/Making+Pottery+at+Oxford+Clay+.jpg"
                                alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                Clay-Made Pottery
                                </Typography>
                                <Typography>
                                Elevate your space with timeless clay-made pottery, crafted by skilled artisans.
                                </Typography>
                            </CardBody>
                            </Card>
                        </Link>
                    </Fade>

                    <Fade direction="right">
                        <Link to={'/subCategorie/Stoneware'}>
                            <Card className="mt-6 mx-5 w-auto lg:w-96 shadow-none border pt-10">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img
                                src="https://cdn.shopify.com/s/files/1/1186/0576/files/Pics-for-CeramicTemplate-01.jpg?v=1486719916"
                                alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                Stoneware
                                </Typography>
                                <Typography>
                                Explore our exquisite stoneware collection, blending durability with rustic  for your home.
                                </Typography>
                            </CardBody>
                            </Card>
                        </Link>
                    </Fade>

                    <Fade direction="up">
                        <Link to={'/subCategorie/Porcelain'}>
                            <Card className="mt-6 mx-5 w-auto lg:w-96 shadow-none border pt-10">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img
                                src="https://images.squarespace-cdn.com/content/v1/5d97bf677e4d3c11df6d859c/1673297209937-VTBHDHDPTIKJ63U3H6GU/Making+Pottery+at+Oxford+Clay+.jpg"
                                alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                Porcelain
                                </Typography>
                                <Typography>
                                Discover the delicate beauty of our porcelain pieces.
                                </Typography>
                            </CardBody>
                            </Card>
                        </Link>
                    </Fade>

                    <Fade direction="down">
                        <Link to={'/subCategorie/Terra-Cotta'}>
                            <Card className="mt-6 mx-5 w-auto lg:w-96 shadow-none border pt-10">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img
                                className="w-full h-full"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Ja9w7dw3BznZMsDLI4iBGZerbS6yO2nBMOgnK28z1w&s"
                                alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                Terra Cotta
                                </Typography>
                                <Typography>
                                Experience the rustic charm of beautiful terra cotta pottery .
                                </Typography>
                            </CardBody>
                            </Card>
                        </Link>
                    </Fade>

                    <Fade direction="left">
                        <Link to={'/subCategorie/Ceramics'}>
                            <Card className="mt-6 mx-5 w-auto lg:w-96 shadow-none border pt-10">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img
                                className="w-full h-full"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMaO_1vCSCCCVVff8B6MqQ_kDpsmGazYG3zCq32M6-Q&s"
                                alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                Ceramics & Architectural
                                </Typography>
                                <Typography>
                                Discover the fusion of ceramics and architectural design .
                                </Typography>
                            </CardBody>
                            </Card>
                        </Link>
                    </Fade>

                    <Fade direction="right">
                        <Link to={'/subCategorie/Decor-Pottery'}>
                            <Card className="mt-6 mx-5 w-auto lg:w-96 shadow-none border pt-10">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img
                                className="w-full h-full"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0og3lId-a5-sLcCjh4lvxvGf0SAku1rNs9MR4awEhlg&s"
                                alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                Home decor pottery
                                </Typography>
                                <Typography>
                                Elevate your home decor with our stunning pottery pieces .
                                </Typography>
                            </CardBody>
                            </Card>
                        </Link>
                    </Fade>
                        
                </div>
            </div>
        </div>
    );
};

export default CategoriesSec;
