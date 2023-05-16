import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_URL_API;

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    // getUsers: builder.query({
    //   query: () => ({
    //     url: '/users',
    //     method: 'GET',
    //   }),
    // }),
    postNewUser: builder.mutation({
      query: (newUser) => ({
        url: '/users',
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
});

export const {
  // useGetUsersQuery,
  usePostNewUserMutation,
} = usersApi;
