import React from 'react'

function User({ user }) {
    return (
        <div>

            {/* Avatar Online and Offline */}
            <div className='flex space-x-4 px-8 py-3 hover:bg-slate-700 transition-all duration-300 ease-in-out cursor-pointer items-center'>

                {/* Avatar online */}
                <div className="avatar avatar-online">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                    </div>
                </div>

                {/* User details */}
                <div className='flex flex-col text-white'>
                    <h1 className='text-xs text-gray-300 font-bold'>{user.fullname}</h1>
                    <span className='text-xs text-gray-400'>{user.email}</span>
                </div>

            </div>

        </div>
    )
}

export default User;