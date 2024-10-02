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
    getAllApplications: builder.query({
      query: () => ({
        url: `${APPLICATION_URL}`,
        method: "GET",
      }),
    }),
    getApplicationById: builder.query({
      query: (id) => ({
        url: `${APPLICATION_URL}/${id}`,
        method: "GET",
      }),
    }),
    updateApplication: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${APPLICATION_URL}/${id}`, // Append the application ID to the correct base URL
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
  useGetAllApplicationsQuery,
  useGetApplicationByIdQuery,
  useUpdateApplicationMutation,
  useDeleteApplicationMutation,
  useGetStatusForUserQuery,
} = applicationApi;
