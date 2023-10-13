import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DefaultLayout from "./layout/DefaultLayout";
import Message from "./pages/Message";
import Profile from "./pages/Profile";
import Authenticate from "./pages/Auth/AuthContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Homepage />
            </DefaultLayout>
          }
        />
        <Route
          path="/messages"
          element={
            <DefaultLayout>
              <Message />
            </DefaultLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <DefaultLayout>
              <Profile />
            </DefaultLayout>
          }
        />
        <Route path="/authenticate" element={<Authenticate />} />
      </Routes>
    </div>
  );
}

export default App;
