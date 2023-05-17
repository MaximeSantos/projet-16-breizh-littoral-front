import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_URL_API;

export const difficultesApi = createApi({
  reducerPath: 'DifficultysApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['Difficultes'],
  endpoints: (builder) => ({
    getDifficultes: builder.query({
      query: () => ({
        url: '/difficultes',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetDifficultesQuery,
} = difficultesApi;
