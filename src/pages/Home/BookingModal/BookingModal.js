import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import useApiRequest from '../../../hooks/useApiRequest';

const BookingModal = ({myHouse, setMyHouse, refetch}) => {
    const {user} = useContext(AuthContext);
      // destructuring all house information
      const { picture, rentPerMonth, location, city, phoneNumber,  houseName} = myHouse;

      // useApiRequest is a custom hook that manage api request
      // and it returns a function called sendRequest
      const {sendRequest} = useApiRequest();
      const handleBookingModal = async (data) => {
        const booked = await sendRequest('https://house-hunter-server-beryl.vercel.app/house-renter', 'POST', data);
        if(booked){
            console.log(booked)
             refetch();
             setMyHouse(null);
             toast.success('you booked successfully');
        }
    }
      // hook form function and state destructurin from useForm
      const { register, handleSubmit, formState: { errors } } = useForm();
    return(
        <div>
        <input type="checkbox" id="open-booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box max-w-2xl">
                <label onClick={() => setMyHouse(null)} htmlFor="open-booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                <form onSubmit={handleSubmit(handleBookingModal)}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5'>

                       <div className="form-control">
                            <input type="text"  {...register("fullName")} defaultValue={user?.fullName} readOnly className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text"  {...register("email")} defaultValue={user?.email} readOnly className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text"  {...register("renterNumber")} defaultValue={user?.phoneNumber} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className='label-text'>House Name</label>
                            <input type="text"  {...register("houseName")} defaultValue={houseName} className="input input-bordered" />
                        </div>

                        <div className="form-control">
                        <label className='label-text'>Picture Url</label>
                            <input type="text"  {...register("picture")} defaultValue={picture} className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className='label-text'>City</label>
                            <input type="text"  {...register("city")} defaultValue={city} className="input input-bordered" />
                        </div>
                         
                        <div className="form-control">
                            <label className='label-text'>Location</label>
                            <input type="text"  {...register("location")} defaultValue={location} className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className='label-text'>Phone Number</label>
                            <input type="text"  {...register("ownerNumber")} defaultValue={phoneNumber} className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className='label-text'>Rent Per Month</label>
                            <input type="text"  {...register("rentPerMonth")} defaultValue={rentPerMonth} className="input input-bordered" />
                        </div>
                    </div>

                    <button type='submit' className='btn'>Submit</button>
                </form>

            </div>
        </div>
    </div>
    )
}
export default BookingModal;