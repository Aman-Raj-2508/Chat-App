import React from 'react';
import { RiLogoutCircleLine } from "react-icons/ri";

function Logout() {
    return (
        <div className='h-[12vh] flex items-center justify-center'>
            <div className='bg-gray-800 px-4 py-2 flex items-center gap-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer'>

                <RiLogoutCircleLine className='text-2xl text-red-400 hover:text-red-300 transition duration-300 ease-in-out' />

                <p className='text-lg font-semibold text-gray-200 hover:text-white transition duration-300 ease-in-out'>
                    Logout
                </p>

            </div>
        </div>
    );
}

export default Logout;
