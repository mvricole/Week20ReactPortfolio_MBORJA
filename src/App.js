// Import Chakra UI elements
import { VStack } from "@chakra-ui/layout";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {

  return (
    <VStack p={5}>
      {/* <NavBar></NavBar> */}
      <Header></Header>
      <Profile></Profile>
      <Social></Social>
    </VStack>
  );
}

export default App;
