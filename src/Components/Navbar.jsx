import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidMicrophone } from "react-icons/bi";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import Avatar from 'react-avatar';

export default function Navbar() {
    const [open, setOpen] = useState(true)

    const toggleHandler = () => {
        setOpen(!open)
    }

  return (
    <div className='flex top-0 justify-center items-center opacity-95 z-10 fixed w-full px-6 md:px-10 h-14 bg-white'>
        <div className='flex gap-8 justify-between w-full items-center text-2xl'>
            <div className='flex gap-4 items-center'>
                <div>
                    <button className='hover:bg-zinc-200 p-2 rounded-full'><GiHamburgerMenu onClick={toggleHandler}/></button>
                </div>
                <div className='flex gap-2 items-center justify-center'>
                    <FaYoutube className='text-3xl text-red-600'/>
                    <span className='text-2xl font-semibold'>Youtube</span>
                </div>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <form>
                    <div className='flex items-center justify-center'>
                        <div className='flex items-center'>
                            <input type="text" placeholder="Search" className="flex items-center w-44 md:w-96 rounded-l-full bg-transparent border border-gray-400 px-5 focus:border-gray-500"/>
                        </div>
                        <button className='py-1 px-3 rounded-r-full border border-gray-400 cursor-pointer'><AiOutlineSearch className='flex items-center'/></button>
                    </div>
                </form>
                <div>
                    <button className='bg-zinc-100 p-2 rounded-full text-xl hover:bg-zinc-200'>
                        <BiSolidMicrophone />
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center gap-4 text-2xl'>
                <button className='hover:bg-zinc-200 p-2 rounded-full'><MdOutlineVideoCall /></button>
                <button className='relative hover:bg-zinc-200 p-2 rounded-full '><FaRegBell /><span className='absolute bottom-5 bg-red-600 px-1 text-white rounded-full text-xs'>9+</span></button>
                <button><Avatar src='/himanshu (1).jpg' size="35" round={true} /></button>
            </div>
        </div>
    </div>
  ) 
}
