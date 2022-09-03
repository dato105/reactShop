import "./ProductPage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import React from "react";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isFatch, setIsFatch] = useState(true);

  const {
    cart,
    setCart,
    setBadge,
    count,
    priceT,
    setPriceT,
    counterArray,
    setCounterArray,
    setCheck,
  } = useContext(ProductContext);

  const { title, image, description, price, rating } = { ...product };

  function addToCart(props) {
    const newCart = [...cart];
    const temp = newCart.filter((e) => e.id === props.id);
    if (temp.length === 0) {
      newCart.push({ ...props });
      counterArray.push({ id: props.id, count: 1 });
      setCounterArray(counterArray);
      setCart(newCart);
      setBadge(count + 1);
      setPriceT(priceT + price);
    }
  }

  useEffect(() => {
    fetchProducts().catch((err) => console.log(err));
  }, []);

  const fetchProducts = () =>
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((productsList) => {
        const newProduct = productsList.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(newProduct);
        setCheck(false);
        setIsFatch(false);
      });

  function descrip() {
    if (product.category === "Protein-Powder")
      return (
        <ul>
          <li>
            <strong>Protein-source: </strong>
            {product.source}
          </li>
          <li>
            <strong>Flavor: </strong>
            {product.flavor}
          </li>
          <li>
            <strong>Brand: </strong>
            {product.brand}
          </li>
          <li>
            <strong>Sales: </strong>
            {product.sales}
          </li>
        </ul>
      );
    else if (product.category === "Clothing")
      return (
        <ul>
          <li>
            <strong>Material: </strong>
            {product.material}
          </li>
          <li>
            <strong>Color: </strong>
            {product.color}
          </li>
          <li>
            <strong>Brand: </strong>
            {product.brand}
          </li>
          <li>
            <strong>Sales: </strong>
            {product.sales}
          </li>
        </ul>
      );
    else {
      return (
        <ul>
          <li>
            <strong>Brand: </strong>
            {product.brand}
          </li>
          <li>
            <strong>Flavor: </strong>
            {product.flavor}
          </li>
          <li>
            <strong>Sales: </strong>
            {product.sales}
          </li>
        </ul>
      );
    }
  }

  return (
    <div>
      {isFatch ? (
        <Loading />
      ) : (
        <div id="container">
          {/* <!-- Start	Product details --> */}
          <div className="product-details">
            <h1>{title}</h1>
            {/* <!-- 		the Product rating --> */}
            <span className="hint-star star">
              <Rating
                name="half-rating-read"
                value={product && rating.rate}
                readOnly
                precision={0.5}
              />
              {product && rating.count}
            </span>

            {/* <!-- The most important information about the product --> */}
            <p className="information">{description}</p>

            {/* <!-- 		Control --> */}
            <div className="control">
              {/* <!-- Start Button buying --> */}
              <button className="btn" onClick={() => addToCart(product)}>
                <Link to="/cart" id="btnProdPage">
                  {/* <!-- 		the Price --> */}
                  <span className="price">{price}$</span>
                  {/* <!-- 		shopping cart icon--> */}
                  <span className="shopping-cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </span>
                  {/* <!-- 		Buy Now / ADD to Cart--> */}
                  <span className="buy">Buy Now</span>
                </Link>
              </button>
              {/* <!-- End Button buying --> */}
            </div>
          </div>

          {/* <!-- 	End	Product details   --> */}

          {/* <!-- 	Start product image & Information --> */}

          <div className="product-image">
            <img src={image} />

            {/* <!-- 	product Information--> */}
            <div className="info">
              <h2>The Description</h2>
              {descrip()}
            </div>
          </div>
          {/* <!--  End product image  --> */}
        </div>
      )}
    </div>
  );
}

export default ProductPage;
