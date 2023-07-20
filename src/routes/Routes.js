import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import DashboardLayout from '../layout/DashboardLayout';
import Main from '../layout/Main';
import Login from '../pages/Account/Login';
import Register from '../pages/Account/Register';
import AddHouse from '../pages/Dashboard/HouseOwnerRoutes/AddHouse';
import HandleOwnerHouse from '../pages/Dashboard/HouseOwnerRoutes/HandleOwnerHouse';
import Home from '../pages/Home/Home';




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            } 
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <HandleOwnerHouse></HandleOwnerHouse>
            },
            {
                path: '/dashboard/add-house',
                element: <AddHouse></AddHouse>
            }
        ]
    } 
 
])


export default router;