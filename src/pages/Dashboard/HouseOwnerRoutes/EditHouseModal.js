import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import useApiRequest from '../../../hooks/useApiRequest';

const EditHouseModal = ({myHouse, setMyHouse, refetch}) => {

    // destructuring all house information
    const {_id, picture, rentPerMonth, roomSize, bedrooms, bathrooms, availableDate, location, city, phoneNumber, description, houseName} = myHouse;

    // useApiRequest is a custom hook that manage api request
    // and it returns a function called sendRequest
    const {sendRequest} = useApiRequest();

    // hook form function and state destructurin from useForm
    const { register, handleSubmit, formState: { errors } } = useForm();

    // this function update the house property
    const handleUpdateModal = async (data) => {
        const updatedResult = await sendRequest(`https://house-hunter-server-beryl.vercel.app/house-owner/${_id}`, 'PUT', data);
        if(updatedResult.modifiedCount > 0){
             refetch();
             setMyHouse(null);
             toast.success('updated successfully');
        }
    }
    return(
        <div>
            <input type="checkbox" id="edit-house-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box max-w-2xl">
                    <label onClick={() => setMyHouse(null)} htmlFor="edit-house-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                    <form onSubmit={handleSubmit(handleUpdateModal)}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5'>
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
                                <label className='label-text'>Bath Room</label>
                                <input type="text"  {...register("bathrooms")} defaultValue={bathrooms} className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className='label-text'>Bed Rooms</label>
                                <input type="text"  {...register("bedrooms")} defaultValue={bedrooms} className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className='label-text'>Room Size</label>
                                <input type="text"  {...register("roomSize")} defaultValue={roomSize} className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className='label-text'>Availabel Date</label>
                                <input type="text"  {...register("availableDate")} defaultValue={availableDate} className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className='label-text'>Phone Number</label>
                                <input type="text"  {...register("phoneNumber")} defaultValue={phoneNumber} className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className='label-text'>Rent Per Month</label>
                                <input type="text"  {...register("rentPerMonth")} defaultValue={rentPerMonth} className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className='label-text'>Description</label>
                                <input type="text"  {...register("description")} defaultValue={description} className="input input-bordered" />
                            </div>
                        </div>

                        <button type='submit' className='btn'>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default EditHouseModal;