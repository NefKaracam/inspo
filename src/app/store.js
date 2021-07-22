import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import backgroundReducer from "../features/background/backgroundSlice";
import weatherReducer from "../features/weather/weatherSlice";
import quoteReducer from "../features/quote/quoteSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    background: backgroundReducer,
    weather: weatherReducer,
    quote: quoteReducer,
  },
});
