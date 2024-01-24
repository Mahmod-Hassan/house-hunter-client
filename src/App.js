import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
// import router from "./routes/Routes";

import { useContext } from "react";
import PrivateRoute from "./components/PrivateRoute";
import { AuthContext } from "./context/AuthProvider";
import DashboardLayout from "./layout/DashboardLayout";
import Main from "./layout/Main";
import Login from "./pages/Account/Login";
import Register from "./pages/Account/Register";
import AddHouse from "./pages/Dashboard/HouseOwnerRoutes/AddHouse";
import HandleOwnerHouse from "./pages/Dashboard/HouseOwnerRoutes/HandleOwnerHouse";
import MyBookings from "./pages/Dashboard/HouseRenterRoute/MyBookings";
import Home from "./pages/Home/Home";


function App() {
  const {user} = useContext(AuthContext);

  return (
    <div>
        {/* <RouterProvider router={router}></RouterProvider> */}
        <Toaster></Toaster>

            <Routes>
                <Route path='/' element={<Main />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Route>
                
                
                <Route path='/dashboard' element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
                      <Route path='/dashboard' element={user?.role === 'House Renter' ? <MyBookings /> :  <HandleOwnerHouse />} />
                      <Route path='/dashboard/add-house' element={<AddHouse />} />
                </Route>
                
            </Routes>

    </div>
  );
}

export default App;
