import { createSlice } from '@reduxjs/toolkit'
import { getHomePageVideos } from '../../Store/reducers/getHomePageVideos'

const initialState = {
  video: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults:[],
  nextPageToken: null,
  recommendedVideo:[],
}

export const youtubeSlice = createSlice({
  name: 'youtubeApp',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled,(state,action) =>{
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = youtubeSlice.actions

export default youtubeSlice.reducer