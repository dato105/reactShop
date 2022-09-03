import ProductContext from "../../contexts/ProductContext";
import "./Contact.css";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import { useEffect, useContext } from "react";
import React from "react";

function Contact() {
  const { setCheck } = useContext(ProductContext);

  useEffect(() => {
    setCheck(false);
  }, []);

  return (
    <Typography
      variant="h3"
      component="div"
      sx={{ textAlign: "center", marginTop: "20px" }}
    >
      contact us <PhoneIcon fontSize="large" />
    </Typography>
  );
}

export default Contact;
