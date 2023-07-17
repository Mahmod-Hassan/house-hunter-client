import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineLockClosed, HiOutlineMail, HiOutlineUpload, HiOutlineUser, HiSelector } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');

    const handleRegister = (data) => {
        console.log(data);
    }
    
    return(
        <div className='flex md:h-screen flex-col md:flex-row justify-between mt-5'>
        
         {/* left side div (illustrator icon) w = 1/2*/}
         <div className='hidden md:block md:w-1/2 h-full md:flex items-center'>
                <img className='h-2/3' src="https://i.ibb.co/Y26xvCc/login.png" alt="" />
             </div>

        {/* right side div */}
        <div className='md:w-1/2 p-5 text-center'>
             <div className='max-w-md mx-auto shadow-md p-5'>
                    
             <h3 className="mt-3 text-xl font-medium text-gray-600 dark:text-gray-200">Welcome Back</h3>     

         {/* form start here */}
                <form className='space-y-4' onSubmit={handleSubmit(handleRegister)}>

                    <div className="relative">
                        <HiOutlineUser className='absolute mt-3 ml-2 text-2xl text-gray-200'></HiOutlineUser>
                        <input {...register("name", { required: "name is required" })} type="text" className="text-gray-700 w-full py-3 bg-white border rounded-lg px-10 outline-none focus:ring-blue-300 focus:ring focus:ring-opacity-40" placeholder="Username" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div>
                    <label htmlFor="dropzone-file" className="flex px-2 py-3 bg-white border-2 border-dashed rounded-lg cursor-pointer">
                        <HiOutlineUpload className='text-2xl text-gray-200'></HiOutlineUpload>
                        <h2 className="mx-3 text-gray-400">Profile Photo</h2>
                        <input {...register("image", { required: "image is required" })} id="dropzone-file" type="file"  />
                </label>
                {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                </div>

                    <label className="flex px-2 py-3 bg-white border rounded-lg cursor-pointer">
                    <HiSelector className='text-2xl text-gray-200'></HiSelector>
                    <select {...register("userType")} className='w-full outline-none text-gray-400'>
                            <option>buyer</option>
                            <option>seller</option>
                    </select>
                    </label>
                    

                    <div className="relative">
                        <HiOutlineMail className='absolute mt-3 ml-2 text-2xl text-gray-200'></HiOutlineMail>
                        <input {...register("email", { required: "email required" })} type="email" placeholder="email" className="text-gray-700 w-full py-3 bg-white border rounded-lg px-10 outline-none focus:ring-blue-300 focus:ring focus:ring-opacity-40"  />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control">
                        <HiOutlineLockClosed className='absolute mt-3 ml-2 text-2xl text-gray-200'></HiOutlineLockClosed>
                        <input {...register("password", { required: "password field required" })} type="password" placeholder="password" className="text-gray-700 w-full py-3 bg-white border rounded-lg px-10 outline-none focus:ring-blue-300 focus:ring focus:ring-opacity-40"  />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    {
                        error && <p className='text-red-500'>{error}
                        </p>
                    }

                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 mb-5" type="submit">Sign Up</button>
                </form>
                <Link to='/login' className="text-sm text-blue-500 hover:underline">Already have an account ?</Link>
            </div>
         </div>
        {/* form end here */}

          
       </div>
    )
}
export default Register;