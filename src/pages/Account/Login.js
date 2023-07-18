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

            {/* right side div start */}
               <div className='md:w-1/2 p-5'>

                {/* shadow div start here */}
                    <div className='max-w-md mx-auto shadow-md p-5'>
                      <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl font-bold mb-4">Please Login</h3>

                     {/* form start here */}
                    <form onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control">
                            <label className="label">
                                <span className='label-text'>Email</span>
                            </label>
                            <input {...register("email", { required: "email is required" })} type="text" placeholder="email" className="input input-bordered" />
                            {
                                errors.email && <p className='text-red-500'>{errors.email.message}</p>
                            }
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className='label-text'>Password</span>
                            </label>
                            <input {...register("password", { required: "password is required" })} type="password" placeholder="password" className="input input-bordered" />
                            {
                                errors.password && <p className='text-red-500'>{errors.password.message}</p>
                            }
                        </div>
                        <div className="flex items-center justify-between my-4">
                            <Link to='#' className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</Link>
                            <button className="btn btn-primary" type="submit">Sign In</button>
                        </div>
                    </form>
                 {/* form end here */}

                    <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>
                        <Link to='/register' className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">register</Link>
                    </div>

               </div>
                {/* shadow div end */}

           </div>
           {/* right side div end */}
 
    </div>
    // container div end
    )
}
export default Login;