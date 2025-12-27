import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const tokenTransferSlice = createSlice({
  name: 'tokenTransfer',
  initialState,
  reducers: {
    sendTokenData: (state,action) => {
      state.value = action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { sendTokenData } = tokenTransferSlice.actions

export default tokenTransferSlice.reducer