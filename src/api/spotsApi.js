import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotsApi = createApi({
  reducerPath: 'spotsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/', // ! temp
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
