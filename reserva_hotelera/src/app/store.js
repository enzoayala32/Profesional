import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import startReducer from "../features/counter/startSlice"
import endReducer from "../features/counter/endSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    start:startReducer,
    end:endReducer,
  },
});
