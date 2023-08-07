import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Train } from "../types/train";

const REDUCER_PREFIX = 'trains';

export const fetchTrains = createAsyncThunk(
  `${REDUCER_PREFIX}/fetchTrains`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json");
      return await response.json() as Train[];
    } catch (e) {
      return rejectWithValue(e);
    }
  }
)

interface TrainsState {
  entities: Train[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: TrainsState = {
  entities: [],
  loading: 'idle',
}

const trainsSlice = createSlice({
  name: 'trains',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrains.pending, (state) => {
      state.loading = 'pending';
      state.entities = initialState.entities;
    })
    builder.addCase(fetchTrains.fulfilled, (state, action) => {
      state.loading = 'succeeded'
      state.entities = action.payload;
    })
    builder.addCase(fetchTrains.rejected, (state) => {
      state.loading = 'failed';
      state.entities = initialState.entities;
    })
  },
})


export default trainsSlice.reducer;