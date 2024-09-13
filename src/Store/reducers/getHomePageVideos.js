// getHomePageVideos.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import parseVideoData from "../../utils/parseVideoData";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_Key;

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/searchPageVideo", async(isNext,{getState}) => {
        const { youtubeApp: {nextPageToken :nextPageTokenFromState, videos}, } = getState();
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="drop x out"&key=${API_KEY}&part=snippet&type=video&${isNext ? `pageToken =${nextPageTokenFromState}`:""}`);
        const items = response.data.items;

        const parsedData = await parseVideoData(items);

        return {parsedData:[...videos,...parsedData], nextPageToken:nextPageTokenFromState}
    }
)
