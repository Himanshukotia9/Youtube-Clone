import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidMicrophone } from "react-icons/bi";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className='flex justify-between items-center bg-[#212121] opacity-95 sticky px-6 md:px-10 h-14'>
        <div className='flex gap-8 justify-between w-full items-center text-2xl'>
            <div className='flex gap-4 items-center'>
                <div>
                    <button className='hover:bg-zinc-500 p-2 rounded-full'><GiHamburgerMenu /></button>
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
                            <input type="text" placeholder="Search" className="flex items-center w-44 md:w-96 rounded-l-full bg-transparent border border-zinc-700 px-5 focus:border-zinc-300"/>
                        </div>
                        <button className='bg-zinc-700 py-1 px-3 rounded-r-full border border-zinc-700 cursor-pointer'><AiOutlineSearch className='flex items-center'/></button>
                    </div>
                </form>
                <div>
                    <button className='bg-zinc-700 p-2 rounded-full text-xl hover:bg-zinc-500'>
                        <BiSolidMicrophone />
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center gap-4 text-2xl'>
                <button className='hover:bg-zinc-500 p-2 rounded-full'><MdOutlineVideoCall /></button>
                <button className='relative hover:bg-zinc-500 p-2 rounded-full'><FaRegBell /><span className='absolute bottom-5 bg-red-600 px-1 rounded-full text-xs'>9+</span></button>
                <button><img src="https://ui-avatars.com/api/?name=Himanshu+Kotia&background=3f3f46&color=ffffff" alt="Avatar" className='size-8 text-base rounded-full m-2'/></button>
            </div>
        </div>
    </div>
  ) 
}
