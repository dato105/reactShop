import * as React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import ProductContext from "../../contexts/ProductContext";
import { useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import "./Login.css";
import Typography from "@mui/material/Typography";

export default function SignUp() {
  const { setCheck } = useContext(ProductContext);
  useEffect(() => {
    setCheck(false);
  }, []);
  return (
    <div>
      <div className="signInBox">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              width: "50ch",
              margin: 3,
              flexDirection: "right",
            },
            marginLeft: "",
            textAlign: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h3" component="div" sx={{ marginTop: "25px" }}>
            Customer login
          </Typography>
          <div>
            <label>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  marginBottom: -2,
                  marginRight: "200px",
                  marginTop: "25px",
                }}
              >
                *Email Adress
              </Typography>
            </label>
            <TextField id="outlined-size-normal" />
          </div>

          <div>
            <label>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  marginBottom: -2,
                  marginRight: "200px",
                }}
              >
                *Password
              </Typography>
            </label>{" "}
            <TextField id="outlined-adornment-password" type="password" />
          </div>
          <Link to={"/"}>
            <button className="btnSignIn">Sign In</button>
          </Link>
        </Box>
      </div>
      <hr></hr>
      <div className="signInHead2">
        <Typography variant="h3" component="div" sx={{ margin: 6 }}>
          New to Dato-Shop?
        </Typography>
      </div>
      <div className="signInHead2">
        <Typography variant="h6" component="div" sx={{ margin: 6 }}>
          Sign up for a Dato-Shop account to gain access to the best priced
          supplements with highest quality ingredients. Plus a range of
          exclusive benefits.
        </Typography>
      </div>
      <Link to={"/signUp"}>
        <button className="btnRegister">Register</button>
      </Link>
    </div>
  );
}
