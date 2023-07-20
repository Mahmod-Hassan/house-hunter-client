import React from 'react';
import useGetRequest from '../../hooks/useGetRequest';
import Loader from '../../shared/Loader/Loader';
import Houses from './Houses.js/Houses';

const Home = () => {
     // fetching all houses in home page
     const {data:houses, loading, refetch} = useGetRequest('http://localhost:5000/house-owner');
     if(loading) return <Loader></Loader>
     console.log(houses);
    return(
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10'>
        {
            houses.map(house => <Houses
            key={house._id}
            house={house}
            >
            </Houses>)
        }
     </div>
    )
}
export default Home;