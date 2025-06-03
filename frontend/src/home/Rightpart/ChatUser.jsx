import React from 'react'

function ChatUser() {
    return (
        <div className='flex  space-x-3 items-center justify-center p-1 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 ease-in-out cursor-pointer mt-1 ml-1 mr-1 h-[8vh] '>

            <div className="avatar avatar-online">
                <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                </div>
            </div>
            <div>
                <h1 className='text-xl font-bold text-gray-200'>Akhil</h1>
                <span className='text-sm text-gray-400'>Offline</span>
            </div>

        </div>
    )
}

export default ChatUser