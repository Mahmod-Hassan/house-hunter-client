import React from 'react';
import NavBar from '../components/NavBar';
import Dashboard from '../pages/Dashboard/Dashboard/Dashboard';

const DashboardLayout = () => {
    return(
        <div>
            <NavBar></NavBar>
            <Dashboard></Dashboard>
        </div>
    )
}
export default DashboardLayout;