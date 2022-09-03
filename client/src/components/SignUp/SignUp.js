import * as React from "react";
import Box from "@mui/material/Box";
import "./SignUp.css";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import Typography from "@mui/material/Typography";

export default function SignUp() {
  const { setCheck } = useContext(ProductContext);

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const [values2, setValues2] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  useEffect(() => {
    setCheck(false);
  }, []);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleChange2 = (prop) => (event) => {
    setValues2({ ...values2, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowPassword2 = () => {
    setValues2({
      ...values2,
      showPassword: !values2.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="signUpHead">
        <Typography variant="h3" component="div" sx={{ margin: 6 }}>
          About You
        </Typography>
      </div>
      <div className="signUpBox">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              width: "50ch",
              margin: 3,
              flexDirection: "right",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <InputLabel id="nameLabel">*Full Name</InputLabel>
            <TextField id="outlined-size-normal" />
          </div>

          <div>
            <InputLabel id="emailLabel">*Email address</InputLabel>
            <TextField id="outlined-size-normal2" />
          </div>
          <div>
            <InputLabel id="emailCLabel">*Confirm Email</InputLabel>
            <TextField id="outlined-size-normal3" />
          </div>
          <div className="password">
            <InputLabel>*Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className="password">
            <InputLabel>*Confirm password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password2"
              type={values2.showPassword ? "text" : "password"}
              value={values2.password}
              onChange={handleChange2("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword2}
                    edge="end"
                  >
                    {values2.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
        </Box>
        <Link to={"/LogIn"}>
          <button className="btnSignUp">Register</button>
        </Link>
        <div className="btnSignUpIn">
          <Link to={"/logIn"}>
            <Button variant="text" sx={{ color: "black" }}>
              Already have an Account? Sign in
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
