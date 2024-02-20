import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { dappApi } from "./apis/dappApi";

export const store = configureStore({
  reducer: {
    [dappApi.reducerPath]: dappApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dappApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useAddAttractionMutation,
  useFetchAttractionsQuery,
  useUpdateAttractionMutation,
  useRemoveAttractionMutation,
  useFetchAttractionQuery,
  useAddRestaurantMutation,
  useFetchRestaurantsQuery,
  useUpdateRestaurantMutation,
  useRemoveRestaurantMutation,
  useFetchRestaurantQuery,
  useAddShowMutation,
  useFetchShowsQuery,
  useUpdateShowMutation,
  useRemoveShowMutation,
  useFetchShowQuery,
  useFetchCompletedPercentageQuery,
  useFetchDateGeneratorQuery,
} from "./apis/dappApi";
