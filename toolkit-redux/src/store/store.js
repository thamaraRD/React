import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../store/slices/counter/counterSlice'
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
})