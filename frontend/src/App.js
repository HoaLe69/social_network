import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
