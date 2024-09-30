import { apiSlice } from "./apiSlice";
import { USER_URL } from "../constant";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: `${USER_URL}`,
        method: "GET",
      }),
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
      }),
    }),
    updatedCCurrentuserProfie: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),

    updateUserById: builder.mutation({
      query: (id, data) => ({
        url: `${USER_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteUserById: builder.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useUpdatedCCurrentuserProfieMutation,
  useUpdateUserByIdMutation,
  useDeleteUserByIdMutation,
  useLogoutMutation,
} = userApi;
