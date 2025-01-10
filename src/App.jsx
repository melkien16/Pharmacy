import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Search from "./pages/Search";
import PageNotFound from "./pages/PageNotFound";
import DrugDetailsPage from "./pages/DrugDetail";
import RegistrationPage from "./pages/Registration";
import LoginPage from "./pages/LoginPage";
import PharmacyDetails from "./pages/PharmacyDetail";
import AdminDashboard from "./pages/Admin";
import PharmacyDashboard from "./pages/PharmacyDashbourd";

const ProtectedRoute = ({ children, role }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

function App() {
  const { user } = useContext(UserContext);

  const isDashboardUser =
    user && (user.role === "admin" || user.role === "pharmacist");

  return (
    <BrowserRouter>
      {!isDashboardUser && <Header />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pharmacy"
          element={
            <ProtectedRoute role="pharmacist">
              <PharmacyDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {!isDashboardUser && <Footer />}
    </BrowserRouter>
  );
}

export default App;
