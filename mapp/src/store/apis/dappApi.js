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
        invalidatesTags: ["Attractions"],
        query: (attraction) => {
          return {
            url: "/attractions",
            method: "POST",
            body: {
              name: attraction.name,
              park: attraction.park,
              location: attraction.location,
              completed: attraction.completed,
            }
          };
        },
      }),
      fetchAttractions: builder.query({
        providesTags: ["Attractions"],
        query: () => {
          return {
            url: "/attractions",
            method: "GET",
          };
        },
      }),
      fetchAttraction: builder.query({
        providesTags: (id) => [{ type: "Attraction", id }],
        query: (id) => {
          return {
            url: `/attractions/${id}`,
            method: "GET",
          };
        },
      }),
      updateAttraction: builder.mutation({
        invalidatesTags: ["Attractions", "Attraction"],
        query: (attraction) => {
          return {
            url: `/attractions/${attraction.id}`,
            method: "PUT",
            body: attraction,
          };
        },
      }),
      removeAttraction: builder.mutation({
        invalidatesTags: ["Attractions"],
        query: (id) => {
          return {
            url: `/attractions/${id}`,
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
