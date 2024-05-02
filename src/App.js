import "./App.css";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/ecommerce-react-task">
        <Navbar />
        <Routes>
          <Route
            exact_path="/ecommerce-react-task"
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
      </BrowserRouter>
    </div>
  );
}

export default App;
