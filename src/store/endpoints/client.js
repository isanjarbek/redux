import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clientsApi = createApi({
  reducerPath: `clients`,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Token ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Clients", "ClientsById"],

  endpoints: (builder) => ({
    // Queries
    clients: builder.query({
      query: (queries) => ({
        url: "/clients/",
        params: { ...queries },
      }),
      providesTags: ["Clients"],
    }),

    clientsFull: builder.query({
      query: (queries) => ({
        url: "/clients/?no_page=1",
      }),
      providesTags: ["Clients"],
    }),

    clientsById: builder.query({
      query: ({ id }) => {
        return {
          url: `/clients/${id}/`,
        };
      },
      providesTags: ["ClientsById"],
    }),

    // Mutations
    createClient: builder.mutation({
      query(data) {
        return {
          url: "/clients/",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Clients"],
    }),

    updateClient: builder.mutation({
      query({ id, ...variables }) {
        return {
          url: `/clients/${id}/`,
          method: `PATCH`,
          body: variables,
        };
      },
      invalidatesTags: ["Clients", "ClientsById"],
    }),

    deleteClient: builder.mutation({
      query({ id }) {
        return {
          url: `/clients/${id}/`,
          method: `DELETE`,
        };
      },
      invalidatesTags: ["Clients"],
    }),
  }),
});

export const {
  useClientsQuery,
  useClientsFullQuery,
  useClientsByIdQuery,
  useCreateClientMutation,
  useDeleteClientMutation,
  useUpdateClientMutation,
} = clientsApi;
