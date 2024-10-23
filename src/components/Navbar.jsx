import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontainer flex justify-between items-center px-4 h-14 py-5">

                <div className="logo font-bold text-white text-2xl ">
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>Get / &gt;</span>
                </div>
                {/* <ul>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold' href="/">Home</a>
                        <a className='hover:font-bold' href="#">About</a>
                        <a className='hover:font-bold' href="#">Contact</a>
                    </li>
                </ul> */}
                <button className='text-white my-5 bg-green-700 px-4 rounded-full flex gap-4 justify-center items-center ring-1 ring-white'>
                    <img className='invert w-10 py-1' src="icons/github.svg" alt="github logo" />
                    <span className='font-bold'>GitHub</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
