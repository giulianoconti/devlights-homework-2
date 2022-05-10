import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { Loading } from "../loading/Loading";

export const AccessIfLogged = ({ children }) => {
  const { user, loadingUser } = useAuth();

  if (loadingUser) return <Loading />;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
};
