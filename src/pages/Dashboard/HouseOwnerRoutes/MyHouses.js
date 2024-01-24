import React from 'react';
import useApiRequest from '../../../hooks/useApiRequest';

const MyHouses = ({house, setMyHouse, refetch}) => {
    const {_id, picture, rentPerMonth, location,houseName} = house;
    const {sendRequest} = useApiRequest();
    
    const deleteHouse = async (id) => {
        const proceed = window.confirm('are u sure want to DELETE');
        if(proceed){
            const data = await sendRequest(`https://house-hunter-server-beryl.vercel.app/house-owner/${id}`, 'DELETE');
            if(data.deletedCount > 0) refetch();
        }
    }

    
    return(
            <tr> 
                <td>
                    <img className='w-20 h-16' src={picture} alt=""></img>
                </td>
                <td>{houseName}</td>
                <td>{rentPerMonth}</td>
                <td>{location}</td>
                <td><button onClick={() => deleteHouse(_id)} className='btn btn-sm'>delete</button></td>
                <td><label 
                onClick={() => setMyHouse(house)} 
                htmlFor="edit-house-modal"
                className='btn btn-sm'>edit</label></td>
            </tr>
    )
}
export default MyHouses;