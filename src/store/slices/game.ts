import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { createSlice } from "@reduxjs/toolkit";

export interface GameSettings {
  rows: number;
  columns: number;
  bombs: number;
  timer: number;
}

interface Game {
  settings: GameSettings;
}

const initialState: Game = {
  settings: {
    rows: 0,
    columns: 0,
    bombs: 0,
    timer: 0,
  },
};

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameSettings(state: Game, action: PayloadAction<GameSettings>) {
      state.settings = { ...state.settings, ...action.payload };
    },
  },
});

export const { setGameSettings } = game.actions;
export default game.reducer;
