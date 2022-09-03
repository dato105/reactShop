import Divider from "@mui/material/Divider";
import ProductContext from "../../contexts/ProductContext";
import React, { useContext } from "react";
import ProductDrawer from "../ProductDrawer/ProductDrawer";
import "./ProductListDrawer.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function ProductListDrawer(props) {
  const { cart, priceT } = useContext(ProductContext);

  const products = cart.map((item) => (
    <div key={item.id} className="drawerProd">
      <ProductDrawer {...item} ProdQuantChange={props.ProdQuantChange} />
      <Divider />
    </div>
  ));

  return (
    <div>
      <Typography gutterBottom variant="h4" component="div" align="center">
        My Cart
      </Typography>

      <Divider variant="middle" />
      {products}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ mt: 2, mb: 2 }}
            variant="h6"
            component="div"
            align="center"
          >
            Total: {parseFloat(priceT).toFixed(2)}$
          </Typography>
        </Grid>
      </Grid>
      <div className="btnGroupDrawer">
        <Link to={"/cart"}>
          <button
            className="btnDrawer"
            onClick={props.toggleDrawer(props.anchor, false)}
          >
            Your Cart
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductListDrawer;
