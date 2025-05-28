import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../pages/About";
import Home from "../pages/Home";
import Programs from "../pages/Programs";
import Academics from "../pages/Academics";
import SubFooter from "../components/SubFooter";
import ProgramDetail from "../pages/ProgramDetail";
import Library from "../pages/Library";
import AuthProvider from "../context/AuthProvider";
import PrivateRouter from "./PrivateRouter";
import AuthForm from "../pages/AuthForm";

const AppContent = () => {
  const location = useLocation();
  const hideFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<ProgramDetail />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/library" element={<PrivateRouter />}>
          <Route path="" element={<Library />} />
        </Route>
        <Route path="/login" element={<AuthForm />} />
        <Route path="/signup" element={<AuthForm />} />
      </Routes>
      {!hideFooter && <SubFooter />}
      {!hideFooter && <Footer />}
    </>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
