import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_URL_API;

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
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
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => ({
        url: '/api/spots/{id}/comments',
        method: 'GET',
      }),
    }),
    postNewComment: builder.mutation({
      query: (newComment, userId, id) => ({
        url: `/api/users/${userId}/spots/${id}/comments`,
        method: 'POST',
        body: newComment,
      }),
    }),
  }),
});

export const {
  useGetCommentsQuery,
  usePostNewCommentMutation,
} = commentsApi;
