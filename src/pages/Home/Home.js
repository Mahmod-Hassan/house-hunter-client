import React, { useState } from 'react';
import useGetRequest from '../../hooks/useGetRequest';
import Loader from '../../shared/Loader/Loader';
import BookingModal from './BookingModal/BookingModal';
import Houses from './Houses.js/Houses';

const Home = () => {
    
    const [myHouse, setMyHouse] = useState({});
    
     // fetching all houses in home page
     const {data:houses, loading, refetch} = useGetRequest('https://house-hunter-server-beryl.vercel.app/house-owner');
     if(loading) return <Loader></Loader>

    return(
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10'>
        {
            houses.map(house => <Houses
                key={house._id}
                house={house}
                setMyHouse={setMyHouse}
            >
            </Houses>)
        }
        {
            myHouse && <BookingModal
                myHouse={myHouse}
                setMyHouse={setMyHouse}
                refetch={refetch}
            ></BookingModal>
        }
     </div>
    )
}
export default Home;