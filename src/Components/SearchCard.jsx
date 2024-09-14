import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchCard({data}) {
  return (
    <div className='group flex gap-3'>
        <div className='relative'>
            <span className='absolute bottom-3 right-3 text-sm bg-gray-900 text-white rounded-md opacity-85 px-2 py-0.5 z-10'>
                {data.videoDuration}
            </span>
            <Link to={`/watch/${data.videoId}`}>
                <img src={data.videoThumbnail} alt="Thumbnail" className='h-52 w-96 rounded-xl group-hover:rounded-none transition-all duration-300'/>
            </Link>
        </div>
        <div className='flex gap-1 flex-col'>
            <h3 className='max-w-2xl'>
            <Link to={`/watch/${data.videoId}`} className='line-clamp-2'>
                {data.videoTitle}
            </Link>
            </h3>
            <div className='text-xs text-gray-500'>
                <div>
                    <Link to={`/watch/${data.videoId}`}>
                        <div>
                            <span className="after:content-['•'] after:mx-1">
                                {data.videoViews} views
                            </span>
                            <span>
                                {data.videoAge}
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='min-w-fit my-2'>
                <a href="#" className='flex items-center gap-2 text-xs text-gray-500'>
                    <img src={data.channelInfo.image} alt="channel" className='h-9 w-9 rounded-full' />
                    <span>{data.channelInfo.name}</span>
                </a>
            </div>
            <div>
                <Link to={`/watch/${data.videoId}`}>
                    <div className='max-w-2xl line-clamp-2 text-sm text-gray-400'>
                        <p>{data.videoDescription}</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
