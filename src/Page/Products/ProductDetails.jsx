import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDetailsAction } from "../../Store/Slices/Products";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productDetailsAction(id));
  }, []);

  const product = useSelector((state) => state.products.productById);
  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <div className="row row-cols g-4">
        <div className="col" key={product.id}>
          <div className="card" style={{ width: "500px" }}>
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
