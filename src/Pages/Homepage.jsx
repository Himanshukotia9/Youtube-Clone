import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { useAppDispatch,useAppSelector } from "../hooks/useApp"
import { getHomePageVideos } from '../Store/reducers/getHomePageVideos';

export default function Homepage() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  },[dispatch])

  return (
    <div>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}
