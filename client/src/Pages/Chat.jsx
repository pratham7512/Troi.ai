import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../db/data'; // Adjust the import path as necessary

function Chat() {

    const { id } = useParams();
    const array = data[`${id}`]; // Use the ID to access the specific data, with a fallback to an empty array if not found

    return (
        <div className='bg-black h-screen'>
            {array.map((item, index) => (
                <div key={index} className='text-white bg-red-500'>{item}</div>
            ))}
        </div>
    );
}

export default Chat;
