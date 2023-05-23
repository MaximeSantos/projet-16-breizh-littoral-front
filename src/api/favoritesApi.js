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
  tagTypes: ['Favorites', 'Spots'],
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: (userId) => ({
        url: `/users/${userId}/favorites`,
        method: 'GET',
      }),
    }),
    postNewFavorite: builder.mutation({
      query: ({ userId, spotId }) => ({
        url: `/users/${userId}/favorites/${spotId}`,
        method: 'POST',
      }),
    }),
    deleteFavorite: builder.mutation({
      query: ({ userId, spotId }) => ({
        url: `/users/${userId}/favorites/${spotId}`,
        method: 'DELETE',
      }),
    }),
    // postLogin: builder.mutation({
    //   query: (user) => ({
    //     url: '/login_check',
    //     method: 'POST',
    //     body: user,
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }),
    // }),
  }),
});

export const {
  useGetFavoritesQuery,
  usePostNewFavoriteMutation,
  useDeleteFavoriteMutation,
} = favoritesApi;