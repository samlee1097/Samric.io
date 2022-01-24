import {createSlice} from "@reduxjs/toolkit";

export const gameSettingSlice = createSlice({

    name: "setting",

    initialState: {
        value: {
            rounds: 0,  
            drawTime: 0, 
        }
    },

    reducers: {
        updateSettings: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {updateSettings} = gameSettingSlice.actions;

export default gameSettingSlice.reducer;