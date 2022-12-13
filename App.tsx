import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import apolloClient from "./src/helpers/apollo-helper";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={apolloClient}>
        <HomeScreen />
        <StatusBar style="auto" />
      </ApolloProvider>
    </SafeAreaProvider>
  );
}
