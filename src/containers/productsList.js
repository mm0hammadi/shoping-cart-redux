import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productsAction";
import ProductComponent from "./productsComponent";

const ProductsList = () => {
  // const product = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  });

  return (
    <div className="ui grid container">
      <br />
      <br />
      <br />
      <ProductComponent />
    </div>
  );
};
export default ProductsList;
