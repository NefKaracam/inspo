import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getImage } from "./backgroundAPI";

export const getBackgroundImage = createAsyncThunk(
  "background/getImage",
  async () => {
    const data = await getImage();
    return data;
  }
);

const backgroundSlice = createSlice({
  name: "images",
  initialState: {
    images: [],
    currentImageIndex: 0,
    isLoading: true,
    hasError: false,
  },
  reducers: {
    nextBackground: (state) => {
      state.currentImageIndex =
        (state.currentImageIndex + 1) % state.images.length;
    },
    prevBackground: (state) => {
      let newIndex = state.currentImageIndex - 1;
      if (newIndex < 0) {
        newIndex = state.images.length - 1;
      }

      state.currentImageIndex = newIndex;
    },
  },
  extraReducers: {
    [getBackgroundImage.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getBackgroundImage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.images.push(action.payload);
    },
    [getBackgroundImage.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const selectImages = (state) => state.background.images;
export const selectImageIndex = (state) => state.background.currentImageIndex;

export const selectImageUrls = (state) =>
  state.background.images.map((image) => image.urls.regular);

export const { nextBackground, prevBackground } = backgroundSlice.actions;
export default backgroundSlice.reducer;
