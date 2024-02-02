import { createSlice } from "@reduxjs/toolkit";

const users=createSlice({
    name: "users",
    initialState:[],
    reducers:{
        addUser(state,action){},
        removeUser(state,action){},
        deleteUsers(state,action){}

    }
})

export {users};