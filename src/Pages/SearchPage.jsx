// Homepage.jsx
import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { useAppDispatch,useAppSelector } from "../hooks/useApp"
import { getHomePageVideos } from '../Store/reducers/getHomePageVideos';
import Spinner from '../Components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import { clearVideos } from '../features/youtube/youtubeSlice';
import { getSearchPageVideos } from '../Store/reducers/getSearchPageVideos';
import SearchCard from '../Components/SearchCard';

export default function Homepage() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const navigate = useNavigate();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm)


  useEffect(() => {
    dispatch(clearVideos());
    if(searchTerm === "")navigate("/")
    else{
        dispatch(getSearchPageVideos(false))
    }
  },[dispatch, navigate, searchTerm])

  return (
    <div className='max-h-screen overflow-auto'>
      <div style={{height: "7.5vh"}}>
        <Navbar/>
      </div>
      <div className='flex' style={{height: "92.5vh"}}>
        <Sidebar/>
        {
          videos.length ?(
            <div className='py-8 pl-8 flex flex-col gap-5 w-full'>
                <InfiniteScroll dataLength = {videos.length} next={() => dispatch(getSearchPageVideos(true))} hasMore ={videos.length<500} loader={<Spinner/>} height={650}>
                        {videos.map((items) => {
                            return (
                                <div className='my-5'>
                                    <SearchCard key={items.videoid} data={items} />
                                </div>
                            )
                        })}
                </InfiniteScroll>
            </div>
          ):(
            <Spinner/>
          )
        }
      </div>
    </div>
  )
}

