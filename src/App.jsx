import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

import Hero from "./components/Hero";
import Search from "./pages/Search";
import PageNotFound from "./pages/PageNotFound";
import RegistrationPage from "./pages/Registration";
import LoginPage from "./pages/LoginPage";
import PharmacyDashboard from "./pages/PharmacyDashbourd";

import ManageInventory from "./pages/nesstedPages/ManageInventory";
import Profile from "./pages/nesstedPages/MyProfile";
import ViewAnalysis from "./pages/nesstedPages/ViewAnalysis";
import AddDrug from "./pages/nesstedPages/AddDrug";
import Setting from "./pages/nesstedPages/Setting";
import ViewInventory from "./pages/nesstedPages/ViewInventory";
import TestAdmin from "./pages/nestedAdmin/AdminDashboatd";

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
  return (
    <BrowserRouter>
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
              <TestAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pharmacy/*"
          element={
            <ProtectedRoute role="pharmacist">
              <PharmacyDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pharmacy/inventory"
          element={
            <ProtectedRoute role="pharmacist">
              <ManageInventory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pharmacy/analytics"
          element={
            <ProtectedRoute role="pharmacist">
              <ViewAnalysis />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pharmacy/edit-profile"
          element={
            <ProtectedRoute role="pharmacist">
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pharmacy/settings"
          element={
            <ProtectedRoute role="pharmacist">
              <Setting />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pharmacy/add-drug"
          element={
            <ProtectedRoute role="pharmacist">
              <AddDrug />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pharmacy/all-inventory"
          element={
            <ProtectedRoute role="pharmacist">
              <ViewInventory />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
