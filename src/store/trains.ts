import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Train, TrainCharacteristics } from "../types/train";

const REDUCER_PREFIX = 'TrainsTable';

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
  entities: Train[],
  loading: "idle" | "pending" | "succeeded" | "failed",
  selectedTrain: Train | null,
  editCharacteristics: TrainCharacteristics[] | null,
}

const initialState: TrainsState = {
  entities: [],
  loading: "idle",
  selectedTrain: null,
  editCharacteristics: null,
}

const trainsSlice = createSlice({
  name: "trains",
  initialState,
  reducers: {
    SELECT_TRAIN: (state, action: PayloadAction<Train>) => {
      state.selectedTrain = action.payload;
      state.editCharacteristics = action.payload.characteristics;
    },
    CHANGE_CELL: (state, action: PayloadAction<{ cellName: keyof TrainCharacteristics, value: number; index: number}>) => {
      if (state.editCharacteristics) {
        const { index, cellName, value} = action.payload;
        state.editCharacteristics[index][cellName] = value
      }
    },
    SAVE_CHARACTERISTICS: (state) => {
      if (state.editCharacteristics) {
        console.log(state.editCharacteristics.sort((a, b) => a.speed - b.speed).map((item) => item.speed))
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrains.pending, (state) => {
      state.loading = "pending";
      state.entities = initialState.entities;
    })
    builder.addCase(fetchTrains.fulfilled, (state, action) => {
      state.loading = "succeeded"
      state.entities = action.payload;
    })
    builder.addCase(fetchTrains.rejected, (state) => {
      state.loading = "failed";
      state.entities = initialState.entities;
    })
  },
})

export const { SELECT_TRAIN, CHANGE_CELL, SAVE_CHARACTERISTICS } = trainsSlice.actions;
export default trainsSlice.reducer;
