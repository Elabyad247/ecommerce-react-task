import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {
  const params = useParams();
  const productsAPI = "https://fakestoreapi.com/products/" + params.id;
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(productsAPI)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
      <h1>Product Details</h1>
      <p>Product ID: {params.id}</p>
      <div className="container p-2">
        <div className="card p-2">
          <img
            src={product.image}
            className="card-img-top w-25 mx-auto"
            alt={product.title}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">
              <small className="text-muted">${product.price}</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
