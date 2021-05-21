import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsAction";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, category, description, price } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  // console.log(product, "product");
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="ui  ">
      {Object.keys(product).length === 0 ? (
        <div className="ui active inverted dimmer">
          <div className="ui large text loader">Loading</div>
        </div>
      ) : (
        <div className="ui segment container">
          <div className="ui two column very relaxed grid">
            <div className="column">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
            </div>
            <div className="column">
              <h1>{title}</h1>
              <h2>
                <a className="ui red tag label" href="/">
                  ${price}
                </a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div
                className="ui vertical animated button primary"
                tabIndex="0"
                style={{ width: "200px" }}
              >
                <div className="hidden content">Add to cart </div>{" "}
                <div className="visible content">
                  <i className="shop icon"></i>{" "}
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="ui vertical divider">and</div>
        </div>
      )}
    </div>
  );
};
export default ProductDetail;
