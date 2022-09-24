import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./components/main-page/main-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
