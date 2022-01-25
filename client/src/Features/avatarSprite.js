import {createSlice} from "@reduxjs/toolkit";

// Inside of this "slice", it contains all of the information about the reducer, the actions it will take, the name of the state, and the initial values of the state
// createSlice from redux toolkit makes it easier to create everything inside of one file and export it all as one thing as well
// We're exporting this, the slice here is not the same as the reducer we want
export const avatarSlice = createSlice({
    // Name of the state
    name: "avatar",

    // Initial values of the state, passed in through the value object
    initialState: {
        value: {
            top: 6, //26 items 
            hairColor: 0, //12 items
            clothes: 0, //12 items
            clothesColor: 0, //18 items
            eyes: 0, //15 items
            eyebrow: 0, //19 items
            mouth: 0, //13 items
            skin: 0, //7 items
            imageURL: 'https://avatars.dicebear.com/api/avataaars/:seed.svg?top[]=bigHair&hairColor[]=auburn&clothes[]=blazer&clothesColor[]=black&eyes[]=close&eyebrow[]=angry&mouth[]=concerned&skin[]=tanned'
        }
    },

    // The different reducers we want to run inside of here
    //The state here will keep track of whatever the initialState is, hover over state to see!🔽  Will change accordingly to whatever the current state is
    reducers: {
        leftArrow: (state, action) => {
            // We're trying to change the value of the state, so we get the "state.value" and assign it the "action.payload" object. We use "action.payload" to change the state
            state.value = action.payload;
            
        },

        rightArrow: (state, action) => {
            state.value = action.payload;
        },

        random: (state) => {
            state.top = Math.ceil(Math.random() * (33 - 6) + 6); //26 items starting from 6 -> 32
            state.hairColor = Math.floor(Math.random()*13); //12 items
            state.clothes = Math.floor(Math.random()*13); //12 items
            state.clothesColor = Math.floor(Math.random()*19); //18 items
            state.eyes = Math.floor(Math.random()*16); //15 items
            state.eyebrow = Math.floor(Math.random()*20); //19 items
            state.mouth = Math.floor(Math.random()*14); //13 items
            state.skin = Math.floor(Math.random()*8); //7 items
        }
    }
})

// Here we're exporting the individual actions of each thing inside of this slice
export const {leftArrow, rightArrow, random} = avatarSlice.actions;

// Don't forget to export; again the reducer and the slice are not the same!!
export default avatarSlice.reducer;