import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import useGetRequest from '../../../hooks/useGetRequest';
import Loader from '../../../shared/Loader/Loader';
import EditHouseModal from './EditHouseModal';
import MyHouses from './MyHouses';

const HandleOwnerHouse = () => {
    const {user} = useContext(AuthContext);
    const [myHouse, setMyHouse] = useState(null);
    const {data:houses, loading, refetch} = useGetRequest(`https://house-hunter-server-beryl.vercel.app/house-owner/${user?.email}`);
    
    if(loading) return <Loader></Loader>

    return(
       <div>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>House</th>
                        <th>Rent</th>
                        <th>location</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                {
                houses.length && houses.map(house => <MyHouses
                   key={house._id}
                   house={house}
                   setMyHouse={setMyHouse}
                   refetch={refetch}
                ></MyHouses>
                )} 
                </tbody>
               
            </table>
        </ div>

         {
            myHouse && <EditHouseModal
                 myHouse={myHouse}
                 setMyHouse={setMyHouse}
                 refetch={refetch}
              ></EditHouseModal>
         }
       </div>
    )
}
export default HandleOwnerHouse;