import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ProductContext from "../../contexts/ProductContext";
import Card from "react-bootstrap/Card";
import "./ProductInCart.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

function ProductInCart(props) {
  const { setBadge, count, deletePro, updateCart, counterArray } =
    useContext(ProductContext);
  const { image, price, id } = props;

  const countPriv = counterArray.find((item) => item.id === id).count;

  return (
    <div className="productInCart">
      <div className="navProduct">
        <h1 id="item">Item</h1>
        <h1 id="quantity">Quantity</h1>
        <h1 id="price">price</h1>
      </div>
      <Box
        sx={{
          color: "action.active",
          display: "flex",
          flexDirection: "row",
          "& > *": {
            marginBottom: 7,
          },
          "& .MuiBadge-root": {
            marginRight: 4,
          },
        }}
      >
        <Card
          style={{ width: "10rem", marginLeft: "1px", marginRight: "0px" }}
          id="cardInCart"
        >
          <Link to={`/product/${props.id}`}>
            <Card.Img variant="top" src={image} className="imgCard" />
          </Link>
        </Card>

        <div className="remPlus">
          <ButtonGroup>
            <Button
              aria-label="reduce"
              onClick={() => {
                setBadge(Math.max(count - 1, counterArray.length));
                updateCart(id, false);
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              aria-label="increase"
              onClick={() => {
                setBadge(count + 1);
                updateCart(id, true);
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
          <h2>{countPriv}</h2>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => deletePro(props, countPriv)}
          >
            Delete
          </Button>
        </div>
        <h1 className="price">{price}$</h1>
      </Box>
    </div>
  );
}

export default ProductInCart;
