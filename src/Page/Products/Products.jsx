import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../Store/Slices/Products";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(productAction());
  }, []);
  const products = useSelector((state) => state.products.products);
  if (!products) return <div>Loading...</div>;

  return (
    <>
      <div>
        <div className="row row-cols g-4">
          {products.map((products) => (
            <div className="col" key={products.id}>
              <div className="card" style={{ width: "500px" }}>
                <img src={products.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{products.title}</h5>
                  <p className="card-text">{products.description}</p>
                </div>
                <button
                  onClick={() => {
                    navigate(`/productDetails/${products.id}`);
                  }}
                  className="btn btn-primary"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
