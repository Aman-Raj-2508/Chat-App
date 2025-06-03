import React from 'react'
import ChatUser from './ChatUser';
import Messages from './Messages';
import Typesend from './Typesend';

function Right() {
    return (
        <div className=' bg-slate-900 w-[70%] text-gray-300 '>
            <ChatUser />

            {/* For scrolling messages */}
            <div className='flex flex-col overflow-y-auto ' style={{ maxHeight: "calc(92vh - 8vh)" }}>
                <Messages />
            </div>

            <Typesend />
        </div>
    )
}

export default Right; 