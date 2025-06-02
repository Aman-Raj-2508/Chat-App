import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";

function Logout() {
    return (
        <div className='h-[12vh]'>
            <div className=''>
                <RiLogoutCircleLine className='text-5xl 
                text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full transition-all ease-in-out p-2 ml-2 mt-2' />


            </div>
        </div>
    )
}

export default Logout;