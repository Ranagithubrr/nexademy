import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const testApi = createApi({
  reducerPath: 'testApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getTodos: builder.query<any, void>({
      query: () => `todos`,
    }),
  }),
})


export const { useGetTodosQuery } = testApi