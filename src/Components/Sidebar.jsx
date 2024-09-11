// Sidebar.jsx
import React from 'react'
import { GoHome, GoHistory } from "react-icons/go";
import { SiYoutubeshorts, SiYoutubemusic } from "react-icons/si";
import { MdOutlineSubscriptions, MdOutlineWatchLater, MdPlaylistPlay } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

export default function Sidebar() {
    const mainLinks = [
        {icon: <GoHome className='text-xl'/>, title: "Home" },
        {icon: <SiYoutubeshorts className='text-xl'/>, title: "Shorts"},
        {icon: <MdOutlineSubscriptions className='text-xl'/>, title: "Subscriptions"},
        {icon: <SiYoutubemusic className='text-xl'/>, title: "Youtube Music"},
    ];

    const otherLinks = [
        {icon: <CgProfile className='text-xl'/>, title: "Your channel"},
        {icon: <GoHistory className='text-xl'/>, title: "History" },
        {icon: <MdPlaylistPlay className='text-xl'/>, title: "Playlists"},
        {icon: <MdOutlineWatchLater className='text-xl'/>, title: "Watch later"},
        {icon: <BiLike className='text-xl'/>, title: "Liked videos"},
    ];


  return (
    <div className='relative w-1/3 md:w-1/6 px-5 overflow-auto pb-8 h-[calc(100vh-4.625rem)]'>
        <ul className='flex flex-col border-b  border-gray-600 py-2'>
            {mainLinks.map(({icon, title}) => {
                return(
                    <li key={title}>
                        <a href="#" className="flex items-center gap-4 pl-2 py-3 hover:bg-zinc-200 rounded-xl">{icon}<span className='text-sm tracking-wider'>{title}</span></a>
                    </li>
                )
            })}
        </ul>
        <ul className='flex flex-col border-b  border-gray-600 py-2'>
            {otherLinks.map(({icon, title}) => {
                return(
                    <li key={title}>
                        <a href="#" className="flex items-center gap-4 pl-2 py-3 hover:bg-zinc-200 rounded-xl">{icon}<span className='text-sm tracking-wider'>{title}</span></a>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
