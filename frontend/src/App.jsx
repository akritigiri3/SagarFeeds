import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CollaborationPage from "./pages/CollaborationPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import FarmerPage from "./pages/FarmerPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NetworkPage from "./pages/NetworkPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import SocialResponsibilityPage from "./pages/SocialResponsibilityPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="network" element={<NetworkPage />} />
        <Route path="farmer-support" element={<FarmerPage />} />
        <Route path="collaborations" element={<CollaborationPage />} />
        <Route path="social-responsibility" element={<SocialResponsibilityPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
