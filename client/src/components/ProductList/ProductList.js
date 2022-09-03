import { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import ProductContext from "../../contexts/ProductContext";
import React, { useContext } from "react";

function ProductList() {
  const { setCheck, productsList } = useContext(ProductContext);

  useEffect(() => {
    setCheck(true);
  }, []);

  const products = productsList.map((item) => (
    <ProductCard key={item.id} {...item} />
  ));

  return <div className="productList">{products}</div>;
}

export default ProductList;
