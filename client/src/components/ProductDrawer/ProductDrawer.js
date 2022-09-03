import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ProductContext from "../../contexts/ProductContext";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import "./ProductDrawer.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function ProductDrawer(props) {
  const { setBadge, count, deletePro, counterArray, updateCart } =
    useContext(ProductContext);
  const { image, price, title, id } = props;

  const countPriv = counterArray.find((item) => item.id === id).count;

  return (
    <div className="productDrawer">
      <Box
        sx={{
          marginLeft: 1,
          color: "action.active",
          display: "flex",
          flexDirection: "row",
          "& > *": {
            marginBottom: 1,
          },
          "& .MuiBadge-root": {
            marginRight: 4,
          },
        }}
      >
        <Card style={{ width: "18rem" }} id="card">
          <Card.Img variant="top" src={image} className="imgCardDrawer" />
        </Card>
        <a className="titleDrawer">
          {title}
          <h3 className="priceDrawer">{price}$</h3>
        </a>

        <div className="remPlusDrawer">
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
          <IconButton
            aria-label="delete"
            sx={{ marginLeft: "25px" }}
            onClick={() => deletePro(props, countPriv)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </Box>
    </div>
  );
}

export default ProductDrawer;
