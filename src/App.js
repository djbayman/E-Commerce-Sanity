import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails";
import { useStateContext } from "./Context/StateContext";
import CartSection from "./Components/CartSection";

function App() {
  const { showCart } = useStateContext();
  return (
    <div className="App">
      <Navbar />
      {showCart && <CartSection />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
