import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./authSlice";

const initState = {value : 0};

export const counterSlice = createSlice({
    name: "counter",
    initialState: initState,
    reducers: {
        increase : (state,action) => {
            state.value += action.payload
        } ,
        decrease : (state,action) => {
            state.value -= action.payload
        } 
    },
    // extraReducers:{
    //     [logout]: (state , action) => {
    //         state.value = 0;

    //         console.log("logout");
    //     }
    // }
    extraReducers:(builder)=>{
        builder.addCase(logout, (state, action) => {
            state.value = 0;
            // console.log("logout");
        })
    }
})
export const { increase , decrease } = counterSlice.actions;
export default counterSlice.reducer;
