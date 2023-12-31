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
      query: (spotId) => ({
        url: `spots/${spotId}/comments`,
        method: 'GET',
      }),
      providesTags: ['Comments'],
    }),
    postNewComment: builder.mutation({
      query: (data) => {
        const { spotId, content } = data;
        return {
          url: `/spots/${spotId}/comments`,
          method: 'POST',
          body: {
            content,
          },
        };
      },
      invalidatesTags: ['Comments'],
    }),
    deleteComment: builder.mutation({
      query: (commentId) => ({
        url: `/comments/${commentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Comments'],
    }),
    patchComment: builder.mutation({
      query: (dataFromMutation) => {
        const {
          commentId,
          data,
        } = dataFromMutation;
        return {
          url: `/comments/${commentId}`,
          method: 'PUT',
          body: { ...data },
        };
      },
      invalidatesTags: ['Comments'],
    }),
  }),
});

export const {
  useDeleteCommentMutation,
  usePatchCommentMutation,
  useGetCommentsQuery,
  usePostNewCommentMutation,
} = commentsApi;
