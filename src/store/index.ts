import bestTime from "./slices/bestTime";
import { configureStore } from "@reduxjs/toolkit";

import game from "./slices/game";

export const store = configureStore({
  reducer: {
    game,
    bestTime,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
