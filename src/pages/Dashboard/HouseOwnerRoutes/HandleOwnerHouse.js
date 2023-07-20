import React, { useState } from 'react';
import useGetRequest from '../../../hooks/useGetRequest';
import Loader from '../../../shared/Loader/Loader';
import EditHouseModal from './EditHouseModal';
import MyHouses from './MyHouses';

const HandleOwnerHouse = () => {
    const [myHouse, setMyHouse] = useState(null);
    const {data:houses, loading, refetch} = useGetRequest('http://localhost:5000/house-owner');
    
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
                {
                 houses.map(house => <MyHouses
                   key={house._id}
                   house={house}
                   setMyHouse={setMyHouse}
                   refetch={refetch}
                ></MyHouses>
            )
         } 
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