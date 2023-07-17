import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogin = (data) => {
        console.log(data)
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
                      <div className='flex justify-center mb-5'>
                    </div>
        {/* form start here */}
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control">
                        <label className="label">Email</label>
                        <input {...register("email", { required: "email is required" })} type="text" placeholder="email" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded outline-none focus:ring-opacity-40 focus:ring focus:ring-blue-300" />
                        {
                            errors.email && <p className='text-red-500'>{errors.email.message}</p>
                        }
                    </div>

                    <div className="form-control">
                        <label className="label">Password</label>
                        <input {...register("password", { required: "password is required" })} type="password" placeholder="password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded outline-none focus:ring-opacity-40 focus:ring focus:ring-blue-300" />
                        {
                            errors.password && <p className='text-red-500'>{errors.password.message}</p>
                        }
                    </div>
                    <div className="flex items-center justify-between my-4">
                        <Link to='#' className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</Link>
                        <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-sm hover:bg-blue-400">
                            Sign In
                        </button>
                    </div>
                </form>
                <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>
                <Link to='/register' className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">register</Link>
           </div>
        </div>
        </div>
      {/* form end here */}

    </div>

    )
}
export default Login;