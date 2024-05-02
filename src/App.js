import "./App.css";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/ecommerce-react-task"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
