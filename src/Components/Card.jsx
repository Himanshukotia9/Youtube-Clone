import React from 'react'
import { RxDotFilled } from "react-icons/rx";
import { Link } from 'react-router-dom';

export default function Card({data}) {
    console.log(data)
  return (
    <div className='group w-64 h-60 flex gap-3 flex-col'>
        <div className='relative'>
            <span className='absolute bottom-3 right-3 text-sm bg-gray-900 text-white rounded-md opacity-85 px-2 py-0.5 z-10'>
                {data.videoDuration}
            </span>
            <Link to={`/watch/${data.videoId}`}>
                <img src={data.videoThumbnail} alt="Thumbnail" className='h-44 w-72 rounded-xl group-hover:rounded-none transition-all duration-300'/>
            </Link>
        </div>
        <div className='flex gap-2'>
            <div className='min-w-fit'>
                <a href="#"><img src={data.channelInfo.image} alt="Channel image" className='size-9 rounded-full'/></a>
            </div>
            <div className=''>
                <Link to={`/watch/${data.videoId}`}>
                    <h3><a href="#" className='line-clamp-2'>{data.videoTitle}</a></h3>
                </Link>
                <div className='text-sm text-gray-400'>
                    <div>
                        <a href="#" className='hover:text-gray-600 line-clamp-1'>{data.channelInfo.name}</a>
                    </div>
                    <Link to={`/watch/${data.videoId}`}>
                        <div className='flex gap-1 items-center'>
                            <span>{data.videoViews} views</span>
                            <RxDotFilled />
                            <span>{data.videoAge}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
