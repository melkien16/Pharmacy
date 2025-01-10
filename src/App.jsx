import { BrowserRouter, Route, Routes } from "react-router-dom";

import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Search from "./pages/Search";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/Test";
import CustomerSearchPage from "./pages/CustSearchPage";
import DrugDetailsPage from "./pages/DrugDetail";
import PharmacyDashboard from "./pages/PharmacyDashbourd";
import RegistrationPage from "./pages/Registration";
import LoginPage from "./pages/LoginPage";
import PharmacyDetails from "./pages/PharmacyDetail";

function App() {
  return (
    <BrowserRouter>
      {/* <Header />

      <main className="pt-16 min-h-[81vh]">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      <Footer /> */}
      {/* <HomePage /> */}
      {/* <CustomerSearchPage /> */}
      {/* <DrugDetailsPage /> */}
      {/* <PharmacyDashboard /> */}
      {/* <Header /> */}
      {/* <Routes>
        <Route path="/home" element={<Hero />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<RegistrationPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes> */}
      {/* <DrugDetailsPage /> */}
      {/* <Footer /> */}
      <PharmacyDetails />

    </BrowserRouter>
  );
}

export default App;
