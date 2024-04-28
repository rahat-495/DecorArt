
import { Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const Update = () => {

    const {id} = useParams() ;
    const data = useLoaderData() ;
    const [updateDate , setUpdateDate] = useState({}) ;
    const navigate = useNavigate() ;
    
    useEffect(() => {
        const result = data.find(item => item._id === id) ;
        setUpdateDate(result) ;
    } , [id , data , updateDate])

    const handleSubmit = (e) => {
        e.preventDefault() ;

        const form = e.target ;

        const itemName = form.itemName.value ;
        const subName = form.subName.value ;
        const image = form.image.value ;
        const shortDesc = form.shortDesc.value ;
        const processing = form.processing.value ;
        const price = form.price.value ;
        const rating = form.rating.value ;
        const stockStatus = form.stockStatus.value ;
        const customization = form.customization.value ;
        
        const updatedData = {itemName , customization , subName , price , rating , stockStatus , processing , image , shortDesc } ;

        fetch(`http://localhost:5555/update/${id}` , {
            method : 'PUT' ,
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updatedData)
        })
        .then(res => res.json()) 
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: "Update!",
                    text: "Update Success Fully !",
                    confirmButtonText: "Ok"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate('/myList') ;
                    }
                  });
            }
        })
    }

    return (
        <div className="max-w-[1440px] mx-auto px-10 my-14">

            <img className="w-full h-[500px] rounded-xl my-20" src={updateDate.image} alt="" />

        <div className="">
            <form onSubmit={handleSubmit}>

                <div className="w-full my-5 flex items-center justify-between gap-x-5">
                    <Input defaultValue={updateDate.itemName} required type="text" name="itemName" label="Item Name"></Input>
                    {/* <Input defaultValue={updateDate.subName} required type="text" name="subName" label="Subcategory Name"></Input> */}
                    <div className="w-full border flex items-center justify-between border-[#B0BEC5] px-3  py-2 rounded-lg">
                            <label className="text-[#607D8B]" htmlFor="subName">Sub Categorie Name :</label>
                            <select required name="subName" id="subName">
                                <option value="Clay-Made-Pottry">Clay-made pottery</option>
                                <option value="Stoneware">Stoneware</option>
                                <option value="Porcelain">Porcelain</option>
                                <option value="Terra-Cotta">Terra Cotta</option>
                                <option value="Ceramics">Ceramics & Architectura</option>
                                <option value="decor">Home decor pottery</option>
                            </select>
                        </div>
                </div>

                <div className="w-full my-5 flex items-center justify-between gap-x-5">
                    <Input label="Short Description" defaultValue={updateDate.shortDesc} required type="text" name="shortDesc"></Input>
                    <Input defaultValue={updateDate.image} label="Image URL" required type="text" name="image"></Input>
                </div>

                <div className="w-full my-5 flex items-center justify-between gap-x-5">
                    <Input label="Price" defaultValue={updateDate.price} required type="text" name="price"></Input>
                    <Input label="Processing Time" defaultValue={updateDate.processing} required type="text" name="processing"></Input>
                </div>

                <div className="w-full my-5 grid grid-cols-2 items-center justify-between gap-x-5">
                    <Input defaultValue={updateDate.rating} label="Rating" required type="text" name="rating" className="w-2/4"></Input>
                    <div className="w-full border flex items-center justify-between border-[#B0BEC5] px-3 py-2 rounded-lg">
                        <label className="text-[#607D8B]" htmlFor="customization">Customization :</label>
                        <select required name="customization" id="customization">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>

                <div className="w-full my-5 flex items-center justify-between gap-x-5">
                    <Input required type="text" name="stockStatus" label="Stock Status" defaultValue={`In stock , Made to Order`}></Input>
                </div>

                <div className="">
                    <input type="submit" value={'Update'} className="w-full btn btn-outline hover:btn-ghost"/>
                </div>

            </form>
        </div>

        <ToastContainer
        position="top-center"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />

    </div>
    );
};

export default Update;
