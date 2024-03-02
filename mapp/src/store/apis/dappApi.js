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
              area: attraction.area,
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
        invalidatesTags: ["Attractions", "Attraction", "CompletedPercentage", "animCheckList", "CompletedAreas"],
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
      addRestaurant: builder.mutation({
        invalidatesTags: ["Restaurants"],
        query: (restaurant) => {
          return {
            url: "/restaurants",
            method: "POST",
            body: {
              name: restaurant.name,
              park: restaurant.park,
              area: restaurant.area,
              completed: restaurant.completed,
            }
          };
        },
      }),
      fetchRestaurants: builder.query({
        providesTags: ["Restaurants"],
        query: () => {
          return {
            url: "/restaurants",
            method: "GET",
          };
        },
      }),
      fetchRestaurant: builder.query({
        providesTags: (id) => [{ type: "Restaurant", id }],
        query: (id) => {
          return {
            url: `/restaurants/${id}`,
            method: "GET",
          };
        },
      }),
      updateRestaurant: builder.mutation({
        invalidatesTags: ["Restaurants", "Restaurant", "CompletedPercentage", "animCheckList", "CompletedAreas"],
        query: (restaurant) => {
          return {
            url: `/restaurants/${restaurant.id}`,
            method: "PUT",
            body: restaurant,
          };
        },
      }),
      removeRestaurant: builder.mutation({
        invalidatesTags: ["Restaurants"],
        query: (id) => {
          return {
            url: `/restaurants/${id}`,
            method: "DELETE",
          };
        },
      }),
      addShow: builder.mutation({
        invalidatesTags: ["Shows"],
        query: (show) => {
          return {
            url: "/shows",
            method: "POST",
            body: {
              name: show.name,
              park: show.park,
              area: show.area,
              completed: show.completed,
            }
          };
        },
      }),
      fetchShows: builder.query({
        providesTags: ["Shows"],
        query: () => {
          return {
            url: "/shows",
            method: "GET",
          };
        },
      }),
      fetchShow: builder.query({
        providesTags: (id) => [{ type: "Show", id }],
        query: (id) => {
          return {
            url: `/shows/${id}`,
            method: "GET",
          };
        },
      }),
      updateShow: builder.mutation({
        invalidatesTags: ["Shows", "Show", "CompletedPercentage", "animCheckList", "CompletedAreas"],
        query: (show) => {
          return {
            url: `/shows/${show.id}`,
            method: "PUT",
            body: show,
          };
        },
      }),
      removeShow: builder.mutation({
        invalidatesTags: ["Shows"],
        query: (id) => {
          return {
            url: `/shows/${id}`,
            method: "DELETE",
          };
        },
      }),
      fetchParkCompletion: builder.query({
        providesTags: ["CompletedPercentage"],
        query: (query) => {
          return {
            url: `/park_completion?park=${query}`,
            method: "GET",
          };
        },
      }),
      fetchDateGenerator: builder.query({
        query: () => {
          return {
            url: "date_generator",
            method: "GET"
          }
        }
      }),
      fetchCompletedAreas: builder.query({
        providesTags: ["CompletedAreas"],
        query: (park) => {
          return {
            url: `completed_areas?park=${park}`,
            method: "GET"
          }
        }
      }),
      fetchExperienceCompletion: builder.query({
        providesTags: ["ExperienceCompletion"],
        query: (query) => {
          return {
            url: `experience_completion?experience=${query}`,
            method: "GET"
          }
        }
      }),
      fetchAnimationCheckList: builder.query({
        providesTags: ["animCheckList"],
        query: (query) => {
          return {
            url: `animation_check_list?${query}`,
            method: "GET"
          }
        }
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
  useAddRestaurantMutation,
  useFetchRestaurantsQuery,
  useRemoveRestaurantMutation,
  useFetchRestaurantQuery,
  useUpdateRestaurantMutation,
  useAddShowMutation,
  useFetchShowsQuery,
  useRemoveShowMutation,
  useFetchShowQuery,
  useUpdateShowMutation,
  useFetchParkCompletionQuery,
  useFetchDateGeneratorQuery,
  useFetchCompletedAreasQuery,
  useFetchExperienceCompletionQuery,
  useFetchAnimationCheckListQuery,
} = dappApi;

export { dappApi };
