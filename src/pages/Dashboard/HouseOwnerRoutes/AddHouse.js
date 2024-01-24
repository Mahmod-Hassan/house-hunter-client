import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddHouse = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleAddHouse = (data) => {
      
        fetch('https://house-hunter-server-beryl.vercel.app/house-owner',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                toast.success('your house added successfully')
            }
        })

    }

    return(
        <div className='px-10'>
            <h1 className='text-xl text-center text-blue-400 font-bold'>Add House</h1>
            <form onSubmit={handleSubmit(handleAddHouse)} className='p-5 shadow-md grid grid-cols-2 gap-3'>
            <div className="form-control relative">  
                <input {...register("houseName", { required: "House name is required" })} type="text" className="input input-bordered pl-10" placeholder="houseName" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div className="form-control relative">  
                <input {...register("location", { required: "this field is required" })} type="text" className="input input-bordered pl-10" placeholder="location" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div className="form-control relative">  
                <input {...register("city", { required: "this field is required" })} type="text" className="input input-bordered pl-10" placeholder="city" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
            <div className="form-control relative">  
                <input {...register("bedrooms", { required: "this field is required" })} type="number" className="input input-bordered pl-10" placeholder="bedrooms (quantity)" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div className="form-control relative">  
                <input {...register("bathrooms", { required: "this field is required" })} type="number" className="input input-bordered pl-10" placeholder="bathrooms (quantity)" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div className="form-control relative">  
                <input {...register("roomSize", { required: "this field is required" })} type="text" className="input input-bordered pl-10" placeholder="roomSize" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

{/* https://i.ibb.co/T4j27vL/room1.jpg
https://i.ibb.co/yRDCxbr/room2.jpg
https://i.ibb.co/c8Mw7wq/room3.jpg
https://i.ibb.co/0sDdTYS/room4.jpg */}
            <div className="form-control relative">  
                <input {...register("picture", { required: "this field is required" })} type="url" className="input input-bordered pl-10" placeholder="picture" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div className="form-control relative">  
                <input {...register("availableDate", { required: "this field is required" })} type="date" className="input input-bordered pl-10" placeholder="availableDate" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div className="form-control relative">  
                <input {...register("phoneNumber", { required: "this field is required" })} type="number" className="input input-bordered pl-10" placeholder="phoneNumber" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div className="form-control relative">  
                <input {...register("rentPerMonth", { required: "this field is required" })} type="number" className="input input-bordered pl-10" placeholder="rentPerMonth" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div className="form-control relative">  
                <input {...register("description", { required: "this field is required" })} type="text" className="input input-bordered pl-10" placeholder="description" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <button className='btn btn-primary'>ADD</button>
            </form>
        </div>
    )
}
export default AddHouse;