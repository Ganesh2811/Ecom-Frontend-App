import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const dataTransferSlice = createSlice({
  name: 'dataTransfer',
  initialState,
  reducers: {
    sendCategoryData: (state,action) => {
      state.value = action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { sendCategoryData } = dataTransferSlice.actions

export default dataTransferSlice.reducer