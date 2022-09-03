import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ProductCard.css";
import { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";

function ProductCard(props) {
  const {
    cart,
    setCart,
    setBadge,
    count,
    priceT,
    setPriceT,
    counterArray,
    setCounterArray,
  } = useContext(ProductContext);
  const { rating, image, title, price, id } = props;

  function addToCart(props) {
    const newCart = [...cart];
    const temp = newCart.filter((e) => e.id == props.id);
    if (temp.length == 0) {
      newCart.push({ ...props });
      counterArray.push({ id: props.id, count: 1 });
      setCounterArray(counterArray);
      setCart(newCart);
      setBadge(count + 1);
      setPriceT(priceT + price);
    } else {
      alert("Product already exist in the cart!\nGo to cart to set the amount");
    }
  }

  return (
    <div>
      <Card style={{ width: "18rem" }} className="card">
        <Link to={`/product/${props.id}`}>
          <Card.Img variant="top" src={image} className="imgCard" />
          <Card.Body>
            <Typography
              variant="h5"
              component="div"
              align="center"
              id="titleCard"
            >
              {title}
            </Typography>
          </Card.Body>
        </Link>
        <Card.Body className="cardBody">
          <Card.Text id="priceCard">
            Price: <strong>{price}$</strong>
          </Card.Text>
          <p id="ratingCount">
            <Rating
              name="half-rating-read"
              value={rating.rate}
              readOnly
              precision={0.5}
            />
            <strong> {rating.count}</strong>
          </p>
        </Card.Body>
        <Button
          className="btnCard"
          id="btnCard"
          variant="primary"
          onClick={() => addToCart(props)}
        >
          Add To Cart <ShoppingCartIcon fontSize="small" />
        </Button>
      </Card>
    </div>
  );
}
export default ProductCard;
