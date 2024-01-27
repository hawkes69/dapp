import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "~/constants";

const dappApi = createApi({
  reducerPath: "dappApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints(builder) {
    return {
      addAttraction: builder.mutation({
        query: () => {
          return {
            url: "/attractions",
            method: "POST",
          };
        },
      }),
      fetchAttractions: builder.query({
        query: () => {
          return {
            url: "/attractions",
            method: "GET",
          };
        },
      }),
      fetchAttraction: builder.query({
        query: (id) => {
          return {
            url: `/attractions/${id}`,
            method: "GET",
          };
        },
      }),
      updateAttraction: builder.mutation({
        query: (attraction) => {
          return {
            url: `/attractions/${attraction.id}`,
            method: "PUT",
            body: attraction,
          };
        },
      }),
      removeAttraction: builder.mutation({
        query: (attraction) => {
          return {
            url: `/attractions/${attraction.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useAddAttractionMutation,
  useFetchAttractionsQuery,
  useRemoveAttractionMutation,
  useFetchAttractionQuery,
  useUpdateAttractionMutation,
} = dappApi;

export { dappApi };
