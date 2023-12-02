import React from 'react'

const SearchInput = () => {
    return (
        <div className='flex justify-center items-center my-5 '>
            <div className=' w-[80%] flex justify-center items-center my-5 shadow-xl rounded-[50px]'>
                <input type="text" placeholder='search' className='w-[100%] h-[50px] outline-none rounded-bl-[50px] rounded-tl-[50px] p-5 border text-[#333] ' />
                <button className='h-[50px] border w-[100px] rounded-br-[50px] rounded-tr-[50px] bg-[#5417c7] text-white' >search</button>
            </div>

        </div>
    )
}

export default SearchInput
