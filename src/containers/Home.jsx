import React, { useState } from 'react';
import { pepsi001, pepsi002, pepsi003 } from '../assets/images/images';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


const Home = ({ setBg }) => {
    const [pepsi, setPepsi] = useState(pepsi001);
    const setChanges = (img, color) => {
        setPepsi(img)
        setBg(color)
    }
    return (
        <>
            <div className="flex flex-row justify-around items-center">
                <div className="-ml-[2rem] flex flex-col gap-[1rem]">
                    <h1 className="uppercase font-[900] text-[3.9rem] leading-[1.5em]">That's What <br /><span className='text-[8rem]'>I Like</span></h1>
                    <p className='-mt-[.5rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, corrupti. <br />Blanditiis reprehenderit alias dolor perferendis adipisci dicta ea ut culpa <br />dolores vero, repellendus aliquid eveniet, veritatis repellat asperiores mollitia itaque.</p>
                    <a href="" className='w-max font-[600] text-[1.15rem] px-4 py-2 rounded-full bg-white text-black uppercase'>View All Products</a>
                </div>
                <img src={pepsi} alt="Blue Pepsi can" />
                <div className='absolute flex flex-col gap-4 right-[2.25rem]'>
                    <a href="" className="text-[2rem] hover:opacity-70"><FaFacebookF /></a>
                    <a href="" className="text-[2rem] hover:opacity-70"><FaTwitter /></a>
                    <a href="" className="text-[2rem] hover:opacity-70"><FaInstagram /></a>
                </div>
            </div>
            <div className='relative flex items-center'>
                <div className='absolute flex left-1/2 -translate-x-1/2'>
                    <a onClick={() => {
                        setChanges(pepsi001, 'bg-blue')
                    }} className='my-0 cursor-pointer transition duration-1000 hover:-translate-y-[1.25rem]'><img src={pepsi001} alt="Blue pepsi can" className='max-w-[3rem]' /></a>
                    <a onClick={() => {
                        setChanges(pepsi002, 'bg-red')
                    }} className='mx-[2rem] my-0 cursor-pointer transition duration-1000 hover:-translate-y-[1.25rem]'><img src={pepsi002} alt="White pepsi can" className='max-w-[3rem]' /></a>
                    <a onClick={() => {
                        setChanges(pepsi003, 'bg-third')
                    }} className='my-0 cursor-pointer transition duration-1000 hover:-translate-y-[1.25rem]'><img src={pepsi003} alt="Black pepsi can" className='max-w-[3rem]' /></a>
                </div>
            </div>
        </>
    )
}

export default Home