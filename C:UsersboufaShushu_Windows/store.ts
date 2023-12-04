import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

interface PageState {
  value: {
    color: string;
    backgroundImage?: File | null;
    time: string;
  };
}

export interface RootState {
  page: PageState;
}

const initialState: PageState = {
  value: {
    color: "black",
    backgroundImage: null,
    time: "25",
  },
};

interface ChangeActionPayload {
  color: string;
  backgroundImage?: File | null;
  time: string;
}

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<ChangeActionPayload>) => {
      state.value = {
        color: action.payload.color,
        backgroundImage: action.payload.backgroundImage,
        time: action.payload.time,
      };
    },
  },
});

export const { change } = pageSlice.actions;

export const store = configureStore({
  reducer: {
    page: pageSlice.reducer,
  },
});
