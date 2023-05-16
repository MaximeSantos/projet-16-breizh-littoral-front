import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_URL_API;

export const spotsApi = createApi({
  reducerPath: 'spotsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['Spots'],
  endpoints: (builder) => ({
    getSpots: builder.query({
      query: () => ({
        url: '/spots',
        method: 'GET',
      }),
    }),
    // addNewSpost: builder.mutation({
    //   query: (newSpot) => ({
    //     url: '/spots',
    //     method: 'POST',
    //     body: {
    //       newSpot,
    //     },
    //   }),
    // }),
  }),
});

export const {
  useGetSpotsQuery,
  // useAddNewSpotMutation,
} = spotsApi;
