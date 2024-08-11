import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductItem from "./pages/ProductItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductItem />} />
          <Route
            path="*"
            element={<h1 className="text-center">404 Page is not found</h1>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
