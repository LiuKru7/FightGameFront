import {createSlice} from "@reduxjs/toolkit";

export const infoSlice = createSlice( {
    name:"info",
    initialState: {
        user: [],
        username: "",
        fight: [],
        myInfo: ""
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setUsername: (state, action) => {
            state.username= action.payload
        },
        setFight: (state, action) => {
            state.fight=action.payload
        },
        setMyInfo: (state, action) => {
            state.myInfo = action.payload
        }
    }
})
export const {setUser,setUsername,setFight, setMyInfo} = infoSlice.actions

export default infoSlice.reducer