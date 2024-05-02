import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";

function ProductsList() {
  const productsAPI = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getProducts = () => {
    fetch(productsAPI)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${productsAPI}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };
  const getCategoryProducts = (categoryName) => {
    fetch(`${productsAPI}/category/${categoryName}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h1 className="text-center p-1 mb-0">Products List</h1>
      <div className="container mb-3">
        <button
          onClick={() => {
            getProducts();
          }}
          className="btn btn-primary mx-1 my-2"
          type="button"
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              key={category}
              onClick={() => {
                getCategoryProducts(category);
              }}
              className="btn btn-primary mx-1 my-2"
            >
              {category}
            </button>
          );
        })}
        <div class="row row-cols-1 row-cols-md-4 g-4">
          {products.map((product) => (
            <div className="card-group col" key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
