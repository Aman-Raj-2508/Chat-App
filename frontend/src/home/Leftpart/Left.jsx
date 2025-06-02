import React from 'react'
import Search from './Search';
import Users from './Users';
import Logout from './Logout';

function Left() {
    return (
        <div className=' bg-black w-[30%] text-white'>
            <Search />
            <Users />
            <Logout />
        </div>
    )
}

export default Left;