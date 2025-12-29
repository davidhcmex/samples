import { Home } from "./components/Home";
import { Flex } from "@chakra-ui/react"

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //   </Routes>
    // </BrowserRouter>

    <Flex
      direction="column"
      w="100%"
      minH="100vh"       // full viewport height
      align="stretch"
    >
      <Home />
    </Flex>
  );
}

export default App


