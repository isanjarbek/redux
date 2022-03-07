import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: `users`,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Token ${token}`);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query(data) {
        return {
          url: `/auth/`,
          method: `POST`,
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
