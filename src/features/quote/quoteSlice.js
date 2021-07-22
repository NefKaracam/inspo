import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getQuote from "./quoteAPI";

export const getRandomQuote = createAsyncThunk(
  "quote/getRandomQuote",
  async () => {
    const response = await getQuote();
    return response;
  }
);

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: "",
    author: "",
    isLoading: true,
    hasError: false,
  },
  extraReducers: {
    [getRandomQuote.pending]: (quote) => {
      quote.isLoading = true;
    },
    [getRandomQuote.fulfilled]: (state, action) => {
      console.log(action);
      return {
        ...action.payload,
        isLoading: false,
        hasError: false,
      };
    },
    [getRandomQuote.rejected]: (quote) => {
      quote.isLoading = false;
      quote.hasError = true;
    },
  },
});

export const selectQuote = (state) => state.quote;

export default quoteSlice.reducer;
