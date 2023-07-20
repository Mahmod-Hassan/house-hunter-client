import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
             <div className="w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
             <div className="w-12 h-12 border-4 border-t-4 border-red-500 rounded-full animate-ping"></div>
         </div>
       </div>
    )
}

export default Loader;