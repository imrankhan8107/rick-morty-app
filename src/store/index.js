import {
  configureStore,
  applyMiddleware,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import characterReducer from "./character";

const store = configureStore(
  {
    reducer: {
      charactersStore: characterReducer,
    },
  },
  applyMiddleware(createAsyncThunk)
);

export default store;
