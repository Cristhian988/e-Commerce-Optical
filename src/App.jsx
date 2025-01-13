import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/sunglasses"
          element={<ShopCategory category="Lentes de Sol" />}
        />
        <Route
          path="/oftaglasses"
          element={<ShopCategory category="Lentes Oftálmicos" />}
        />
        <Route
          path="/contactlens"
          element={<ShopCategory category="Lentes de Contacto" />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
