import { apiSlice } from "./apiSlice";
import { APPLICATION_URL } from "../constant";

const applicationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createApplication: builder.mutation({
      query: (data) => ({
        url: `${APPLICATION_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    getApplications: builder.query({
      url: `${APPLICATION_URL}`,
      method: "GET",
    }),
    getApplicationById: builder.query({
      url: (id) => `${APPLICATION_URL}/${id}`,
      method: "GET",
    }),
    updateApplication: builder.mutation({
      query: (id, data) => ({
        url: `${APPLICATION_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteApplication: builder.mutation({
      query: (id) => ({
        url: `${APPLICATION_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateApplicationMutation,
  useGetApplicationsQuery,
  useGetApplicationByIdQuery,
  useUpdateApplicationMutation,
  useDeleteApplicationMutation,
} = applicationApi;
