import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Women from "./Pages/women/women";
import Men from "./Pages/Men/Men";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Pages/women/women" element={<Women />} />
          <Route path="/Pages/Men/Men" element={<Men />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App