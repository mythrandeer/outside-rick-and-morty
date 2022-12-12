import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  createHttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import { GRAPHQL_BASE_URL } from "./constants-helper";

const httpLink = createHttpLink({
  uri: GRAPHQL_BASE_URL,
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    // Report network / auth errors to Sentry or Crashlytics
  }
);

const apolloLink = ApolloLink.from([errorLink, httpLink]);

const apolloClient = new ApolloClient({
  link: apolloLink,
  cache: new InMemoryCache(),
});

export default apolloClient;
