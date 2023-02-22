import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { createSlice } from "@reduxjs/toolkit";
import {
  getStorageBeginerTime,
  getStorageIntermediateTime,
  getStorageAdvancedTime,
  setStorageBeginerTime,
  setStorageIntermediateTime,
  setStorageAdvancedTime,
} from "./../../utils/localStorage";
interface BestTime {
  beginner: number[];
  intermediate: number[];
  advanced: number[];
}

const initialState: BestTime = {
  beginner: getStorageBeginerTime(),
  intermediate: getStorageIntermediateTime(),
  advanced: getStorageAdvancedTime(),
};

export const bestTime = createSlice({
  name: "time",
  initialState,
  reducers: {
    addToBegginerTime(state, action: PayloadAction<number>) {
      state.beginner.length === 10 && state.beginner.shift();
      state.beginner.push(action.payload);
      setStorageBeginerTime(state.beginner);
    },
    addToIntermediateTime(state, action: PayloadAction<number>) {
      state.intermediate.length === 10 && state.intermediate.shift();
      state.intermediate.push(action.payload);
      setStorageIntermediateTime(state.intermediate);
    },
    addToAdvancedTime(state, action: PayloadAction<number>) {
      state.advanced.length === 10 && state.advanced.shift();
      state.advanced.push(action.payload);
      setStorageAdvancedTime(state.advanced);
    },
  },
});

export const { addToAdvancedTime, addToBegginerTime, addToIntermediateTime } =
  bestTime.actions;
export default bestTime.reducer;
