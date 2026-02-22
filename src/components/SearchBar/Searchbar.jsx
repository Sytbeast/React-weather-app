import React, { useState } from 'react'

const Searchbar = ({ setCity }) => {

    const [input, setInput] = useState('')

    const handleSearch = () => {
        setCity(input)
    }

    const handleKey = (e) => {
        if (e.key == "Enter") {
            handleSearch();
        }
    }


    return (
        <div className='h-10 text-center border border-gray-400 shadow-xl p-5 w-full rounded-2xl my-10 flex items-center max-w-150 mx-auto hover:shadow-2xl hover:scale-105 transition-all ease-in'>

            <div className='w-full'>
                <input
                    onKeyDown={(e) => handleKey(e)}
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    className='w-full text-gray-600 font-mono capitalize p-2 rounded-l-2xl outline-none' type="text" placeholder='Type City name here ...' />
            </div>

            <div onClick={handleSearch} className='p-2 cursor-pointer'>
                <img width={25} src="search.png" alt="" />
            </div>
        </div>
    )
}

export default Searchbar
