import { Navigate } from "react-router-dom";

const RequireAuthentication = ({ children }) => {
  const auth = JSON.parse(localStorage.getItem("user"));
  return auth ? children : <Navigate to="/login" />;
};

export default RequireAuthentication;
