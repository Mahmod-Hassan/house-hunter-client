import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="drawer drawer-mobile border-5">
        {/* <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" /> */}
        <div className="drawer-content flex flex-col">

            {/* main content here */}
            <Outlet></Outlet>

        </div>
        {/* drawer-side */}
        <div className="">
            {/* <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> */}
            <ul className="menu p-4 w-80 bg-base-100 text-base-content space-y-4">
                {/* sidebar content here */}
                {/* only house owner can access these routes */}
                {
                    user?.role === 'House Owner' && <>
                        <Link to='/dashboard' className='hover:bg-slate-300 p-3 bg-slate-100'>My Houses</Link>
                        <Link to='/dashboard/add-house' className='hover:bg-slate-300 p-3 bg-slate-100'>Add House</Link>
                    </>
                }

                {
                    user?.role === 'House Renter' && <>
                       <Link to='/dashboard' className='hover:bg-slate-300 p-3 bg-slate-100'>My Bookings</Link>
                    </>
                }
            </ul>

        </div>
    </div>
  
    );
};

export default Dashboard;