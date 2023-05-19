import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_URL_API;

export const spotsApi = createApi({
  reducerPath: 'spotsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      // const token = getState().auth.token
      // eslint-disable-next-line max-len
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODQ0ODA5OTMsImV4cCI6MTY4NDU2NzM5Mywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiY29vbEBjb29sLmNvbSJ9.guEILL4htF8cw6nKRTdhX-25hoiZtoBsXGPslqgb17Q70rzNtrrAnVRkPL9uhXja0v3UrQK_k1mCRoSDaEz3YIypvGcjqq_krcXcgTqCqKYQhaTGIo0M2ra-daLpZcNyM6c7tpz0RIaH875cP5o0bTrH5ML890l6HNqFo6a94r7CDG8nVTEPhf3CZfYvBIK02aBac59JURvs01BYkEZHnW7nlK9gnw3WNsCr6SDdA2LSZ0oEVvUzS8NMEvspQmeKi9d8igOaIXbIxbKlCDLJaX5IIMIOsKp6WorfgMIRLFIeqNUif7NmVFIQvn-L88xbIoA0Tawyfg93-WiBf02tiA';
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      console.log('headers !!!!!!!!!', headers);
      return headers;
    },
  }),
  tagTypes: ['Spots'],
  endpoints: (builder) => ({
    getSpots: builder.query({
      query: () => ({
        url: '/spots',
        method: 'GET',
      }),
    }),
    postNewSpot: builder.mutation({
      query: (newSpot) => ({
        url: '/spots',
        method: 'POST',
        body: newSpot,
      }),
    }),
    GetSpot: builder.query({
      query: (spotId) => ({
        url: `/spots/${spotId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetSpotsQuery,
  useGetSpotQuery,
  usePostNewSpotMutation,
} = spotsApi;
