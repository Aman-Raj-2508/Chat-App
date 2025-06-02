import React from 'react'
import User from './User'
import '../../index.css' // Ensure you have the correct path to your CSS file

function Users() {
    return (
        <div>

            <h1 className='px-8 py-2 text-white font-semibold bg-slate-800 rounded-md'>
                Messages
            </h1>

            {/* User component */}

            <div className=' py-2 overflow-y-auto  custom-scroll' style={{ maxHeight: "calc(82vh - 10vh)" }}>
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>

        </div>
    )
}

export default Users