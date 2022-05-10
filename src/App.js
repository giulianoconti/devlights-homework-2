import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components/ui/Footer";
import { Landing } from "./components/pages/home/Landing";
import { List } from "./components/pages/pokemons/List";
import { Login } from "./components/pages/login/Login";
import { Navbar } from "./components/ui/Navbar";
import { View } from "./components/pages/pokemons/View";
import { AuthProvider } from "./context/authContext";
import { Register } from "./components/pages/login/Register";
import { AccessIfNotLogged } from "./components/ProtectedRoutes/AccessIfNotLogged";
import { AccessIfLogged } from "./components/ProtectedRoutes/AccessIfLogged";

export const App = () => {
  return (
    <div className="background">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/list/:pageId"
              element={
                <AccessIfLogged>
                  <List />
                </AccessIfLogged>
              }
            />
            <Route
              path="/pokemon/:id"
              element={
                <AccessIfLogged>
                  <View />
                </AccessIfLogged>
              }
            />
            <Route
              path="/login"
              element={
                <AccessIfNotLogged>
                  <Login />
                </AccessIfNotLogged>
              }
            />
            <Route
              path="/register"
              element={
                <AccessIfNotLogged>
                  <Register />
                </AccessIfNotLogged>
              }
            />
             <Route path="/pokemon/0" element={<Navigate to="/" />} />
             <Route path="/pokemon/a:id" element={<Navigate to="/" />} />
             <Route path="/pokemon/-:id" element={<Navigate to="/" />} />
            <Route path="/list/-:pageId" element={<Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};
