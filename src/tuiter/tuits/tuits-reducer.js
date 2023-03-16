import { createSlice } from "@reduxjs/toolkit";
import posts from './posts.json';

const tuitsSlice = createSlice({
 name: 'posts',
 initialState: posts
});

export default tuitsSlice.reducer;