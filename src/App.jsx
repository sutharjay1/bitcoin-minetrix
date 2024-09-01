import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Dashboard from "./page/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full h-full min-h-screen flex flex-col bg-white font-poppins text-[#16191E] ">
        <NavBar />
        <main className="flex-1 w-full bg-white font-poppins">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};
