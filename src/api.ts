import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { gql } from "graphql-request";
import {
  GetRepositoriesResponse,
  Repository,
  User,
  UserResponse,
} from "./types";

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

    getRepositories: builder.query<Repository[], { first?: number }>({
      query: ({ first }) => ({
        document: gql`
          query GetRepositories($first: Int = 10) {
            user(login: "fernandobelotto") {
              repositories(first: $first) {
                nodes {
                  id
                  name
                  url
                }
              }
            }
          }
        `,
        variables: {
          first,
        },
      }),
      transformResponse: (response: GetRepositoriesResponse) =>
        response.user.repositories.nodes,
    }),

    createRepository: builder.mutation({
      query: (name) => ({
        document: gql`
          mutation CreateNewRepository($name: String!) {
            createRepository(input: { name: $name, visibility: PUBLIC }) {
              repository {
                name,
                visibility
              }
            }
          }
        `,
        variables: {
          name,
        },
      }),
    }),
  }),
});

export const { useCreateRepositoryMutation , useLazyGetUserByLoginQuery, useGetRepositoriesQuery } =
  graphqlApi;
