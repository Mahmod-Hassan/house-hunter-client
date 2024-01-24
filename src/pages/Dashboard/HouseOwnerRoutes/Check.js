import React from 'react';

const Check = () => {
    return(
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
                <tr> 
                <td>
                    <img className='w-20 h-16' src="" alt=""></img>
                </td>
                <td>house name</td>
                <td>rent per month</td>
                <td></td>
                <td><button  className='btn btn-sm'>delete</button></td>
                <td><label
                htmlFor="edit-house-modal"
                className='btn btn-sm'>edit</label></td>
            </tr>
                </tbody>
          
        </table>
         </div>
    )
}
export default Check;