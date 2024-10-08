// Homepage.jsx
import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { useAppDispatch,useAppSelector } from "../hooks/useApp"
import { getHomePageVideos } from '../Store/reducers/getHomePageVideos';
import Spinner from '../Components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../Components/Card';

export default function Homepage() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  },[dispatch])

  return (
    <div className='max-h-screen overflow-auto'>
      <div style={{height: "7.5vh"}}>
        <Navbar/>
      </div>
      <div className='flex' style={{height: "92.5vh"}}>
        <Sidebar/>
        {
          videos.length ?(
            <InfiniteScroll dataLength = {videos.length} next={() => dispatch(getHomePageVideos(true))} hasMore ={videos.length<500} loader={<Spinner/>} height={650}>
              <div className='grid gap-y-14 gap-x-8 lg:grid-cols-4 grid-cols-2 p-8'>
                {videos.map((items) => {
                  return <Card key={items.videoid} data={items} />
                })}
              </div>
            </InfiniteScroll>
          ):(
            <Spinner/>
          )
        }
      </div>
    </div>
  )
}
