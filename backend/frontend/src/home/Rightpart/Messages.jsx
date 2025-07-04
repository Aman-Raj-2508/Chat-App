import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage.js';
import Loading from '../../components/Loading.jsx';
import useGetSocketMessage from '../../context/useGetSocketMessage.js';

function Messages() {

    const { loading, messages } = useGetMessage();
    // console.log(messages);
    useGetSocketMessage(); // This hook listens for new messages from the socket and updates the messages state

    const lastMsgRef = useRef();
    useEffect(() => {


        setTimeout(() => {
            if (lastMsgRef.current) {
                lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
            }

        }, 100);

    }, [messages]);

    return (
        <div className='' style={{ minHeight: "calc(92vh - 8vh)" }}>


            {loading ? (<Loading />) : (
                messages.length > 0 &&
                messages.map((message, index) => (
                    <div key={index} ref={lastMsgRef}>
                        <Message message={message} />
                    </div>

                ))
            )}

            {!loading && messages.length === 0 && (
                <div>
                    <p className='text-center mt-[20%]'> Say Hi! to start the conversation. </p>
                </div>
            )}

        </div>
    )
}

export default Messages