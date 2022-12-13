import { gql } from "@@generated/gql";

export const GET_EPISODES = gql(/* GraphQL */ `
  query GetEpisodes($page: Int!) {
    episodes(page: $page) {
      results {
        name
        air_date
      }
    }
  }
`);
