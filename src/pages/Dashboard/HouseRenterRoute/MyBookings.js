import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import useApiRequest from '../../../hooks/useApiRequest';
import useGetRequest from '../../../hooks/useGetRequest';
import Loader from '../../../shared/Loader/Loader';

const MyBookings = () => {
    const {user} = useContext(AuthContext);

    // fetching a particular user bookings by user email
    const { data:bookings, loading, refetch } = useGetRequest(`https://house-hunter-server-beryl.vercel.app/house-renter?email=${user?.email}`);
    const {sendRequest} = useApiRequest();

    // deleting a particular booking by id
    const deleteBooking = async (id) => {
        const proceed = window.confirm('are u sure want to DELETE');
        if(proceed){
         const deletedData = await sendRequest(`https://house-hunter-server-beryl.vercel.app/house-renter/${id}`, 'DELETE');
         console.log(deletedData);
         if(deletedData.deletedCount > 0) {
            refetch();
            toast.success('successfully deleted')
         }
        }
    }
    
    if(loading) return <Loader></Loader>
    return(

        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Photo</th>
                        <th>House</th>
                        <th>Rent</th>
                        <th>location</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking,i)=>  <tr key={i}> 
                            <td>{i + 1}</td>
                            <td>
                                <img className='w-20 h-16' src={booking?.picture} alt=""></img>
                            </td>
                            <td>{booking?.houseName}</td>
                            <td>{booking?.rentPerMonth}</td>
                            <td>{booking?.location}</td>
                            <td><button onClick={() => deleteBooking(booking?._id)} className='btn btn-sm'>delete</button></td>
                        </tr>)
                    }
               </tbody>
            </table>
        </ div>
      
    )
}
export default MyBookings;