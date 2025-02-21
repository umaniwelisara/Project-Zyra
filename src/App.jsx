import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";

import AgeGroupProvider from "./context/AgeGroupProvider";
import SettingsBar from "./components/SettingsBar";
import NavigationBar from "./components/NavigationBar";
import AnnouncementBanner from "./components/AnnouncementBanner";

function App() {
  return (
    <AgeGroupProvider>
      <SettingsBar />
      <BrowserRouter>
        <NavigationBar />
        <AnnouncementBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AgeGroupProvider>
  );
}

export default App;
