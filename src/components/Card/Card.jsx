import React from 'react'

const Card = ({ title, slot1, slot2, slot3 , val1 , val2 , val3 }) => {

    return (
        <div className='font-mono rounded-2xl max-w-full p-4 bg-white shadow-[0px_4px_8px_8px_rgba(0,0,0,0.1)] hover:scale-105 transition-all ease-in '>
            <div className='text-xl font-bold text-center text-gray-600'>
                {title}
            </div>

            <div className='pl-2 text-gray-500'>
                {slot1} : {val1}
            </div>

            {
                slot2 != null ? <div className='pl-2 text-gray-500'>
                    {slot2} : {val2}
                </div>
                    : " "
            }
            {
                slot3 != null ? <div className='pl-2 text-gray-500'>
                    {slot3} : {val3}
                </div>
                    : " "
            }
        </div>
    )
}

export default Card
