import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import routes from "./routes";

function App() {
  return (
    <Box className="App">
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              element={route.component}
              key={route.path}
            />
          );
        })}
      </Routes>
    </Box>
  );
}

export default App;
