import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Landing } from "./components/Landing";
import { List } from "./components/List";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { NotFound } from "./components/NotFound";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { View } from "./components/View";

export const App = () => {
  return (
    <div className="background">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/list"
            element={
              <ProtectedRoute accessIfIsLogged={true}>
                <List />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute accessIfIsLogged={false}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/pokemon/:id" element={<View />} />
          <Route path="/Services" element={<h1>asdsadsaSErvice</h1>} />
          <Route path="/pokemon/-:id" element={<Navigate to="/list" />} />
          <Route path="/pokemon/0" element={<Navigate to="/list" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
