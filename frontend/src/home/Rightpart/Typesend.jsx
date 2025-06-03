import React from 'react'
import { IoSend } from "react-icons/io5";


function Typesend() {
    return (
        <div className='flex space-x-1 h-[8vh] bg-gray-800 justify-center'>

            <div className='w-[70%] mx-1'>

                {/* Type and Send Message */}
                <input type="text" placeholder="Type here" className="border border-gray-700 outline-none w-full px-4 py-3 mt-1 rounded-xl bg-black" />

            </div>

            <button>

                <IoSend className='text-3xl' />


            </button>

        </div>
    )
}

export default Typesend