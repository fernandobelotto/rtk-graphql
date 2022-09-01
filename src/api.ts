import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { gql } from "graphql-request";
import { User, UserResponse } from "./types";


export const graphqlApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: "https://api.github.com/graphql",
    requestHeaders: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_KEY}`,
    },
  }),
  endpoints: (builder) => ({
    getUserByLogin: builder.query<User, string>({
      query: (login) => ({
        document: gql`
          query GetUser($login: String!) {
            user(login: $login) {
              id
              name
              email
              createdAt
              bio
            }
          }
        `,
        variables: {
          login,
        },
      }),
      transformResponse: (response: UserResponse) => response.user,
    }),
  }),
});

export const { useGetUserByLoginQuery, useLazyGetUserByLoginQuery } = graphqlApi;
