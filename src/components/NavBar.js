import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const NavBar = () => {
    const {user, getUser, setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        setUser({})
    }

    return(
            <nav className='flex justify-between px-10 h-16 items-center border-b-2'>
                <Link to='/' className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl font-black">House Hunter</Link>
                <div className='space-x-4'>
                    {
                        user?.email ? <>
                            <span>{user?.role}</span>
                            <Link to='/dashboard' className='hover:border-b-2 hover:border-black'>Dashboard</Link>
                           <button onClick={logout} className='btn btn-danger'>Logout</button>
                        </>
                        
                            :
                            <>
                             <Link to='/login' className='hover:border-b-2 hover:border-black'>Login</Link>
                            </>
                           
                    }
                    
                </div>
            </nav>
    )
}
export default NavBar;