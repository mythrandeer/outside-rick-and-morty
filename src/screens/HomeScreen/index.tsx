import { AppContextProvider } from "@@context/AppContext";
import { Header, Footer, Body, SafeAreaView } from "@@components";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <AppContextProvider>
        <Header />
        <Body />
        <Footer />
      </AppContextProvider>
    </SafeAreaView>
  );
}
