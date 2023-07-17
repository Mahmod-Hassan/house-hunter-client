import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
            <nav className='flex justify-between px-10 h-16 items-center border-b-2'>
                <Link to='/' className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl font-black">House Hunter</Link>
                <div className='space-x-4'>
                    <Link to='/login' className='hover:border-b-2 hover:border-black'>Login</Link>
                    <Link to='/register' className='hover:border-b-2 hover:border-black'>Register</Link>
                </div>
            </nav>
    )
}
export default NavBar;