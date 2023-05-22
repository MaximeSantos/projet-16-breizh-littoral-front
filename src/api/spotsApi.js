/* eslint-disable max-len */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_URL_API;

export const spotsApi = createApi({
  reducerPath: 'spotsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    // Si on a un token valide, on le rajoute dans le header de nos requêtes concernant les spots
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Spots', 'Favorites'],
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
