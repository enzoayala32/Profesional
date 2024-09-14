import { createSlice } from '@reduxjs/toolkit';  
  
export const startSlice = createSlice({  
  name: 'start',  
  initialState: {  
   value: new Date(2024, 8, 6).getTime(), // getTime returns cantidad milliseconds han pasado desde media noche de 1970  
  },  
  reducers: {  
   setStart: (state, action) => {  
    state.value = action.payload;  
   },  
  },  
});  
  
export const { setStart } = startSlice.actions;  
  
export const selectStart = state => state.start.value;  
  
export default startSlice.reducer;

