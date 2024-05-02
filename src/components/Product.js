import { Link } from "react-router-dom";
function Product(props) {
  const { product } = props;
  return (
    <>
      <div className="card h-100">
        <img
          src={product.image}
          className="card-img-top p-2"
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
        </div>
        <div className="card-footer">
          <Link to={`/product/${product.id}`} className="btn btn-primary">
            Buy with ${product.price}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Product;
