import { createSlice } from '@reduxjs/toolkit';  
  
export const endSlice = createSlice({  
  name: 'end',  
  initialState: {  
   value: new Date(2024, 8, 6).getTime(), // getTime returns cantidad milliseconds han pasado desde media noche de 1970  
  },  
  reducers: {  
  setEnd: (state, action) => {  
    state.value = action.payload;  
  },  
  },  
});  
  
export const { setEnd } = endSlice.actions;  
  
export const selectEnd = state => state.end.value;  
  
export default endSlice.reducer;
