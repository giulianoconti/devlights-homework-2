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
            <Route path="/devlights-homework-2/" element={<Landing />} />
            <Route
              path="/devlights-homework-2/list/:pageId"
              element={
                <AccessIfLogged>
                  <List />
                </AccessIfLogged>
              }
            />
            <Route
              path="/devlights-homework-2/pokemon/:id"
              element={
                <AccessIfLogged>
                  <View />
                </AccessIfLogged>
              }
            />
            <Route
              path="/devlights-homework-2/login"
              element={
                <AccessIfNotLogged>
                  <Login />
                </AccessIfNotLogged>
              }
            />
            <Route
              path="/devlights-homework-2/register"
              element={
                <AccessIfNotLogged>
                  <Register />
                </AccessIfNotLogged>
              }
            />
             <Route path="/devlights-homework-2/pokemon/0" element={<Navigate to="/devlights-homework-2/" />} />
             <Route path="/devlights-homework-2/pokemon/a:id" element={<Navigate to="/devlights-homework-2/" />} />
             <Route path="/devlights-homework-2/pokemon/-:id" element={<Navigate to="/devlights-homework-2/" />} />
            <Route path="/devlights-homework-2/list/-:pageId" element={<Navigate to="/devlights-homework-2/" />} />
            <Route path="/devlights-homework-2/*" element={<Navigate to="/devlights-homework-2/" />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};
