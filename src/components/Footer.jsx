import React from 'react'

const Footer = () => {
    return (
        <div className=' mt-5 flex flex-col justify-center items-center bg-slate-800 text-white w-full'>
            <div className="logo font-bold text-white text-2xl p-2 ">
                <span className='text-green-500'>&lt;</span>
                Pass
                <span className='text-green-500'>Get / &gt;</span>
            </div>
            <div className='flex'>
                Created By <img className='h-5 justify-center items-center m-1 text-center' src="icons/heart.png" alt="" />  Rujul
            </div>
        </div>
    )
}

export default Footer
