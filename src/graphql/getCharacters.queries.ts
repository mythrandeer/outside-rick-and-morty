import { gql } from "@@generated/gql";

export const GET_CHARACTERS = gql(/* GraphQL */ `
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        status
        gender
        image
      }
    }
  }
`);
