import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_URL_API;

export const sportsApi = createApi({
  reducerPath: 'sportsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['Sports'],
  endpoints: (builder) => ({
    getSports: builder.query({
      query: () => ({
        url: '/sports',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetSportsQuery,
  // useAddNewSpotMutation,
} = sportsApi;
