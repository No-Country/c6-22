import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children, nav, isLogged }) => {
  const location = useLocation();
  if (!isLogged) {
    return <Navigate to={nav} replace state={location.pathname} />;
  }
  return children;
};
