import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../axios';

const initialState = {
  group: [],
  status: "Loading...",
  error: ""
};

export const fetchGroup = createAsyncThunk('/posts/fetchGroup', 
  async () => {
    const response = await axios.get('/group');
    console.log(response.data);

    return response.data||{};
  }  
);  

const groupSlice = createSlice(
  {
    name: 'group',
    initialState,
    reducers: {},
    extraReducers: {
    }
  }
);

export const groupReducer = groupSlice.reducer;