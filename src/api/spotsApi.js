/* eslint-disable max-len */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_URL_API;

export const spotsApi = createApi({
  reducerPath: 'spotsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    // prepareHeaders: (headers) => {
    //   // const token = getState().auth.token
    //   // eslint-disable-next-line max-len
    //   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`);
    //   }
    //   console.log('headers !!!!!!!!!', headers);
    //   return headers;
    // },
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
