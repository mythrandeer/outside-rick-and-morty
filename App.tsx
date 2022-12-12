import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

import apolloClient from "./src/helpers/apollo-helper";

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </ApolloProvider>
  );
}
