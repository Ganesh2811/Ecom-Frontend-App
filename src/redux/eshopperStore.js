import { configureStore } from '@reduxjs/toolkit'
import dataTransferReducer from './slices/dataTransferSlice';
import cartReducer from './slices/cartSlice';
import tokenReducer from './slices/tokenSlice';

const eshopperStore = configureStore({
  reducer: {
    dataTransfer:dataTransferReducer,
    cart:cartReducer,
    tokenTransfer:tokenReducer
  },
})

export default eshopperStore;