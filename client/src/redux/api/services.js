import { apiSlice } from "./apiSlice";
import { SERVICES_URL } from "../constant";

const servicesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => ({
        url: `${SERVICES_URL}`,
        method: "GET",
      }),
    }),
    getServiceById: builder.query({
      query: (id) => ({
        url: `${SERVICES_URL}/${id}`,
        method: "GET",
      }),
    }),
    createService: builder.mutation({
      query: (data) => ({
        url: `${SERVICES_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    updateService: builder.mutation({
      query: (id, data) => ({
        url: `${SERVICES_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `${SERVICES_URL}/${id}`,
        method: "DELETE",
      }),
    }),
    searchService: builder.query({
      query: (searchText) => ({
        url: `${SERVICES_URL}search?keyword=${searchText}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetServiceByIdQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
  useSearchServiceQuery,
} = servicesApi;
