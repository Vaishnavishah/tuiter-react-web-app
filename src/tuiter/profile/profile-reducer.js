import { createSlice } from "@reduxjs/toolkit";
import profile from './profile.json';


const currentProfile = {
 "firstName": "Jose",
 "lastName": "Annunziato",
 "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.",
 "location": "Boston, MA",
 "dateOfBirth": "7/7/1968"
};

const templateProfile = {
 "handle": "@jannunzi",
 "profilePicture": "elon-musk.jpg",
 "bannerPicture": "banner.jpg",
 "website": "youtube.com/webdevtv",
 "dateJoined": "4/2009",
 "followingCount": 340,
 "followersCount": 223,
 "numberOfTuits": 6225
}

const profileSlice = createSlice({
 name: 'profile',
 initialState: profile,
 reducers: {
     editProfile(state, action) {
            console.log(action.payload);
             return {...state, ...action.payload}

        }
     }

});

export const {editProfile}  = profileSlice.actions;
export default profileSlice.reducer;