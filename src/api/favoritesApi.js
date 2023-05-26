import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_URL_API;

export const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Favorites'],
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: () => ({
        url: '/favorites',
        method: 'GET',
      }),
      providesTags: ['Favorites'],
    }),
    postNewFavorite: builder.mutation({
      query: ({ spotId }) => ({
        url: `/favorites/${spotId}`,
        method: 'POST',
      }),
      invalidatesTags: ['Favorites'],
    }),
    deleteFavorite: builder.mutation({
      query: ({ spotId }) => ({
        url: `/favorites/${spotId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Favorites'],
    }),
  }),
});

export const {
  useGetFavoritesQuery,
  usePostNewFavoriteMutation,
  useDeleteFavoriteMutation,
} = favoritesApi;
