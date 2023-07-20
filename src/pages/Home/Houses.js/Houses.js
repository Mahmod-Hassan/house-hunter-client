import React from 'react';

const Houses = ({house}) => {
         // destructuring all house information
         const {_id, picture, rentPerMonth, roomSize, bedrooms, bathrooms, availableDate, location, city, phoneNumber, description, houseName} = house;

    return(
        <div className="rounded-lg shadow-md">
        <img className="w-full h-64" src={picture} />
    
        <div className="p-6">
            <div>
                <h4 className="font-medium text-blue-600 uppercase ">{houseName}</h4>
                <p>Bedrooms: {bedrooms} | Bathrooms: {bathrooms} | Room Size: {roomSize}</p>
                <p>City: {city} | Location: {location}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
            </div>
    
            <div className="mt-4">
                <div className="flex items-center justify-between gap-5">
                    <div>
                        <img className="w-12 bg-gray-200 h-12 rounded-full" src="https://i.ibb.co/DKmfKhQ/my-image-removebg-preview.png" alt="Avatar" />
                    </div>
                    <div>
                        <h3 className='text-blue-500'>Owner Name</h3>
                        <span className="text-sm">{availableDate}</span>
                    </div>
                    <button className='btn'>Book Now</button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Houses;