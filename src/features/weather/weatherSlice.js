import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchWeather from "./weatherAPI";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  ({ latitude, longitude }) => fetchWeather.getWeather(latitude, longitude)
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: "Phnom Penh",
    weather: [
      {
        description: "",
      },
    ],
    temperature: "",
    icon: "01d",
    isLoading: true,
    hasError: false,
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: {
    [getWeather.fulfilled]: (state, action) => {
      state.weather = action.payload.weather;
      state.temperature = action.payload.temperature;
      state.description = action.payload.description;
      state.icon = action.payload.icon;
    },
  },
});

export const selectWeather = (state) => state.weather;

export const { setCity } = weatherSlice.actions;
export default weatherSlice.reducer;
