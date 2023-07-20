import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { HiOutlineLockClosed, HiOutlineMail, HiOutlineUser, HiPhone } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {getUser} = useContext(AuthContext);

    const handleRegister = (data) => {
        const {phoneNumber, password} = data;
        if (!(/(\+88)?-?01[0-9]\d{8}/g).test(phoneNumber)) {
            setError('please give a valid number')
            return;
        }
        if(password.length < 6){
            setError("password must be 6 character")
            return;
        }
        fetch('http://localhost:5000/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            if(data?.email && data?.accessToken){
                localStorage.setItem('access_token', data?.accessToken)
                localStorage.setItem('loggedIn', true)
                setError('');
                toast.success('you sign up successfully');
                getUser();
                navigate('/');
            }else if(data?.error){
                setError(data?.error)
            }
        })
        .catch(err => {
            console.log(err.message);
            toast.error(err.message)
        })
    }
    
    return(
        <div className='flex md:h-screen flex-col md:flex-row justify-between mt-5'>
        
         {/* left side div (illustrator icon) w = 1/2*/}
         <div className='hidden md:block md:w-1/2 h-full md:flex items-center'>
                <img className='h-2/3' src="https://i.ibb.co/Y26xvCc/login.png" alt="" />
             </div>

        {/* right side div */}
        <div className='md:w-1/2 p-5'>
             <div className='max-w-md mx-auto shadow-md p-5'>
                    
             <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl font-bold mb-4">Please Register</h3>     

         {/* form start here */}
                <form className='space-y-4' onSubmit={handleSubmit(handleRegister)}>

                    <div className="form-control relative">
                        <HiOutlineUser className='absolute mt-3 ml-2 text-2xl text-gray-200'></HiOutlineUser>
                        <input {...register("fullName", { required: "name is required" })} type="text" className="input input-bordered pl-10" placeholder="Username" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className='form-control'>
                        <select {...register("role")} className='select select-bordered'>
                                <option>House Owner</option>
                                <option>House Renter</option>
                        </select>
                    </div>
                    
                    <div className="form-control relative">
                        <HiPhone className='absolute mt-3 ml-2 text-2xl text-gray-200'></HiPhone>
                        <input {...register("phoneNumber", { required: "phone number is required" })} type="number" placeholder="+880" className="input input-bordered pl-10"  />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control relative">
                        <HiOutlineMail className='absolute mt-3 ml-2 text-2xl text-gray-200'></HiOutlineMail>
                        <input {...register("email", { required: "email is required" })} type="email" placeholder="email" className="input input-bordered pl-10"  />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control">
                        <HiOutlineLockClosed className='absolute mt-3 ml-2 text-2xl text-gray-200'></HiOutlineLockClosed>
                        <input {...register("password", { required: "password field required" })} type="password" placeholder="password" className="input input-bordered pl-10"  />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    {
                        error && <p className='text-red-500'>{error}
                        </p>
                    }

                    <button className="btn btn-neutral w-full" type="submit">Sign Up</button>
                </form>
                {/* form end here */}
                <Link to='/login' className="text-sm text-blue-500 hover:underline text-center block mt-5">Already have an account ?</Link>
            </div>
             {/* shadows div closed here */}
         </div>
        {/* right side div closed here */}

       </div>
    //    container div closed here
    )
}
export default Register;