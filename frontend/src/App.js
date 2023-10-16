import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { Box } from "@chakra-ui/react";
import Explore from "./pages/explore";

function App() {
  return (
    <Box className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
