import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

import "./styles.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  interface ProtectedRouteProps {
    children: React.ReactNode;
  }

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
          }/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
