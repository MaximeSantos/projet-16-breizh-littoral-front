import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_URL_API;

export const spotsApi = createApi({
  reducerPath: 'spotsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      // const token = getState().auth.token
      // eslint-disable-next-line max-len
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODQzMzQyODEsImV4cCI6MTY4NDQyMDY4MSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiY29vbEBjb29sLmNvbSJ9.qc2wEc1ukJxejug8Xw7cqxDffPQUsOT_XdTLynwE0gts7hvIbij7RAj_CjxZSYWmdmbOtZ7YhWSGjn0P28JdqrhgEOJKjS0CV7cDi-zfUBMtfcglvYrtWrJilt-QU66TTG5RnmaQICLTNYHhhloBKxnS5utOkLZ8tNSSXGBRXoYvjwC8vGUUNbe0KBqbJ8I4geTaE9S2fnPex7EFpDqSU8LuvPBePrphdvpmJjqmt74QmVkiBbc94InE-7jyV35xNECJfsK_CrOyLirfSt3zMd0RzTzI4tYIIe5i-9n_t6B3-PXjwknUVUTYJZl0ZNbMKjhEeTR4utraIi0gSjdhhQ';
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
        body: {
          newSpot,
        },
      }),
    }),
  }),
});

export const {
  useGetSpotsQuery,
  usePostNewSpotMutation,
} = spotsApi;
