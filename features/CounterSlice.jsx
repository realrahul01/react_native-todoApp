import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    user: {}
}
export const CounterSlice =  createSlice({
    name: "counter",
    initialState,
    reducers:{
        userDetail: (state, action)=>{
            state.user = action.payload
        }
    }
})

export const {userDetail} = CounterSlice.actions

export default CounterSlice.reducer