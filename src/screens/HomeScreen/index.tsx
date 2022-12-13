import { AppContextProvider } from "@@context/AppContext";
import { Header, Footer, Body } from "@@components";

export default function HomeScreen() {
  return (
    <AppContextProvider>
      <Header />
      <Body />
      <Footer />
    </AppContextProvider>
  );
}
