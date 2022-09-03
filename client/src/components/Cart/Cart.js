import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../../contexts/ProductContext";
import ProductInCart from "../ProductInCart/ProductInCart";
import "./Cart.css";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function Cart() {
  const {
    cart,
    priceT,
    setCart,
    setCheck,
    setBadge,
    setPriceT,
    setCounterArray,
  } = useContext(ProductContext);
  const [pay, setPay] = useState(false);

  function handleClick() {
    setCart([]);
    setPay(true);
    setBadge(0);
    setPriceT(0);
    setCounterArray([]);
  }

  useEffect(() => {
    setCheck(false);
  }, []);

  const products = cart.map((item) => (
    <div key={item.id}>
      <ProductInCart {...item} />
      <Divider />
    </div>
  ));

  return (
    <div>
      {cart.length !== 0 ? (
        <>
          <h1 id="headerCart">my cart</h1>
          <ul>{products}</ul>
          <Typography
            sx={{ mt: 2, mb: 2 }}
            variant="h6"
            component="div"
            align="center"
          >
            Total: {parseFloat(priceT).toFixed(2)}$
          </Typography>
          <button className="btnCheckOut" onClick={handleClick}>
            CheckOut
          </button>
        </>
      ) : (
        <>
          {pay ? (
            <div className="titlePurchase">
              <Typography
                variant="h3"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Thank you for your purchase! Looking forward to seeing you soon
              </Typography>
              <Link to={"/"}>
                <button className="btnCheckOut">Back to home</button>
              </Link>
            </div>
          ) : (
            <div>
              <Typography
                variant="h3"
                component="div"
                sx={{ textAlign: "center", marginTop: "20px" }}
              >
                Sorry, the cart is empty
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ textAlign: "center", marginTop: "20px" }}
              >
                Return to the <Link to={"/"}>home page</Link> to fill the cart
              </Typography>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;
