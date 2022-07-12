import React from 'react';
import logo from '../assets/images/logo.png'
const Navbar = () => {
    return (
        <div className='relative flex flex-row justify-between items-center'>
            <header className='relative flex flex-row justify-between py-[1.25rem] w-full px-[5.75rem] items-center'>
                <a href=""><img src={logo} className="" /></a>
                <ul className='flex list-none gap-[2.25rem] '>
                    <li className="cursor-pointer hover:opacity-80 text-white">Home</li>
                    <li className="cursor-pointer hover:opacity-80 text-white ">Products</li>
                    <li className="cursor-pointer hover:opacity-80 text-white"> What's New</li>
                    <li className="cursor-pointer hover:opacity-80 text-white">Newsletter</li>
                    <li className="cursor-pointer hover:opacity-80 text-white">Contact</li>
                </ul>
            </header>
        </div>
    )
}

export default Navbar