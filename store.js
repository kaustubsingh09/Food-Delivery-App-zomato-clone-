import { configureStore } from "@reduxjs/toolkit";
import basketSliceReducer from "./features/basketSlice";
import restaurantSliceReducer from "./features/restaurantSlice";

export const store = configureStore({
  reducer: {
    basket: basketSliceReducer,
    restaurant: restaurantSliceReducer,
  },
});
