import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./components/pages/DashboardPage";
import { PageA } from "./components/dashboard/PageA";
import { PageB } from "./components/dashboard/PageB";
import { Home } from "./components/pages/Home";
import { AuthPage } from "./components/pages/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard/*" element={<DashboardPage />}>
            <Route path="page-a" element={<PageA />} />
            <Route path="page-b" element={<PageB />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
