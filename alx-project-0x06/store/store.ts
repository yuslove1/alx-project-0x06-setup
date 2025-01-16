import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// Define the counter slice, which manages the counter state
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0, // Initial value of the counter
  },
  reducers: {
    // Increment the counter value
    increment: (state) => {
      state.value += 1;
    },
    // Decrement the counter value, preventing it from going below zero
    decrement: (state) => {
      state.value = Math.max(0, state.value - 1); // Ensure value doesn't go below 0
    },
  },
});

// Create the Redux store, including the counter reducer
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Export the action creators for increment and decrement
export const { increment, decrement } = counterSlice.actions;

// Export type definitions for the root state and app dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export a custom hook for using the app dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;