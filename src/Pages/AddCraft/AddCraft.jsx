
import { Input } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const AddCraft = () => {

    const {user} = useContext(AuthContext) ;
    
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
        
        const itemInfo = {itemName , customization , subName , price , rating , stockStatus , processing , image , shortDesc , userName : user.displayName , userEmail : user.email} ;

        console.log(itemInfo);

        fetch(`http://localhost:5555/addCraftItem` , {
            method : 'POST' ,
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(itemInfo) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                toast.success('Item Added Success Fully !') ;
                // form.reset() ;
            }
        })
    }

    return (
        <div className="max-w-[1440px] mx-auto px-10 my-14">
            <div className="">
                <form onSubmit={handleSubmit}>

                    <div className="w-full my-5 flex items-center justify-between gap-x-5">
                        <Input type="text" name="itemName" label="Item Name"></Input>
                        <Input type="text" name="subName" label="Subcategory Name"></Input>
                    </div>

                    <div className="w-full my-5 flex items-center justify-between gap-x-5">
                        <Input type="text" name="shortDesc" label="Short Description"></Input>
                        <Input type="text" name="image" label="Image-URL"></Input>
                    </div>

                    <div className="w-full my-5 flex items-center justify-between gap-x-5">
                        <Input type="text" name="price" label="price"></Input>
                        <Input type="text" name="processing" label="Processing Time"></Input>
                    </div>

                    <div className="w-full my-5 grid grid-cols-2 items-center justify-between gap-x-5">
                        <Input type="text" name="rating" label="Rating" className="w-2/4"></Input>
                        {/* <Input type="text" name="subName" label="Customization"></Input> */}
                        <div className="w-full border flex items-center justify-between border-[#B0BEC5] px-3 py-2 rounded-lg">
                            <label className="text-[#607D8B]" htmlFor="customization">Customization :</label>
                            <select name="customization" id="customization">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full my-5 flex items-center justify-between gap-x-5">
                        <Input type="text" name="stockStatus" label="Stock Status" defaultValue={`In stock , Made to Order`}></Input>
                        <Input type="text" name="userName" label="User Name" defaultValue={user.displayName} readOnly></Input>
                    </div>
                    
                    <div className="w-full my-5 flex items-center justify-between gap-x-5">
                        <Input type="text" name="UserEmail" label="User Email" defaultValue={user.email} readOnly></Input>
                    </div>

                    <div className="">
                        <input type="submit" value={'Add Item'} className="w-full btn btn-outline hover:btn-ghost"/>
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

export default AddCraft;
