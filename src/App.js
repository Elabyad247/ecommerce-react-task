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
            exact
            path="/"
            element={
              <>
                <Slider />
                <ProductsList />
              </>
            }
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
