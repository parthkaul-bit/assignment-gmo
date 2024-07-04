import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import FormPage from "./components/FormPage";
import SecondPage from "./components/SecondPage";
import "./index.css";

const App: React.FC = () => {
  const userDetails = localStorage.getItem("userDetails");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route
          path="/second-page"
          element={userDetails ? <SecondPage /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

import { createRoot } from "react-dom/client";
const container = document.getElementById("app");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
