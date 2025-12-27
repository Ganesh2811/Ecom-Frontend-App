import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state,action) => {
        // console.log(action.payload);
        var ans = state.value.filter(val=> val._id == action.payload._id)
        // console.log(ans,ans.length);
        
        if(ans.length==0){
            state.value.push(action.payload);
        }
    },
    removeCart: (state,action) => {
      state.value = action.payload;
    },
    replaceCart: (state,action) => {
        state.value = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCart,removeCart,replaceCart } = cartSlice.actions

export default cartSlice.reducer