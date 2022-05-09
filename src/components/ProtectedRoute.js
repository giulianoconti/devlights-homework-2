import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const ProtectedRoute = ({ children, accessIfIsLogged }) => {
  const loggedIn = window.localStorage.getItem("loggedIn") === "true";

  // if I want to access a page when I am registered:
  if (loggedIn && accessIfIsLogged) return <>{children}</>;
  if (loggedIn && !accessIfIsLogged)
    return <Navigate replace="on" to="/not-found" />;

  // if I want to access a page when I am not logged in:
  if (!loggedIn && accessIfIsLogged)
    return <Navigate replace="on" to="/not-found" />;
  if (!loggedIn && !accessIfIsLogged) return <>{children}</>;
};

ProtectedRoute.propTypes = {
  accessIfIsLogged: PropTypes.bool.isRequired,
};
