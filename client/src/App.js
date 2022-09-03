import TopCard from "./components/TopCard/TopCard";
import ProductList from "./components/ProductList/ProductList";
import ProductPage from "./components/ProductPage/ProductPage";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ProductContext from "./contexts/ProductContext";
import "./App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { Link } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Loading from "./components/Loading/Loading";
import React from "react";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(false);
  const [arrInit, setArrInit] = useState([]);
  const [priceT, setPriceT] = useState(0);
  const [counterArray, setCounterArray] = useState([]);
  const [value, setValue] = useState("all");
  const [category, setCategory] = useState("all");
  const [isFatch, setIsFatch] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  function setBadge(number) {
    setCount(number);
  }

  const fetchProducts = () =>
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((productsList) => {
        setArrInit(productsList);
        setProductsList(productsList);
        setIsFatch(false);
      });

  function filter(category) {
    setValue("all");
    setCategory(category);
    if (category === "all") {
      setProductsList(arrInit);
    } else {
      setProductsList(() =>
        arrInit.filter((product) => product.category === category)
      );
    }
  }

  function deletePro(product, num) {
    const newCart = cart.filter((item) => item.id !== product.id);
    const newCounterArray = counterArray.filter(
      (item) => item.id !== product.id
    );
    setCart(newCart);
    setBadge(count - num);
    setCounterArray(newCounterArray);
    setPriceT(priceT - num * product.price);
  }

  function sort(option) {
    setValue(option);
    const array = [...productsList];
    if (option === "Best Selling") {
      array.sort(function (a, b) {
        return (a.sales - b.sales) * -1;
      });
      setProductsList(array);
    } else if (option === "all") {
      filter(category);
    } else if (option === "Price, low to high") {
      array.sort(function (a, b) {
        return a.price - b.price;
      });
      setProductsList(array);
    } else if (option === "Price, high to low") {
      array.sort(function (a, b) {
        return (a.price - b.price) * -1;
      });
      setProductsList(array);
    }
  }

  function search(input) {
    setValue("all");
    if (input === "") {
      filter(category);
    } else {
      const arr = input.split(" ");
      const prod = arrInit.filter(function (item) {
        for (let i = 0; i < arr.length; i++) {
          if (!item.title.toUpperCase().includes(arr[i].toUpperCase())) {
            return false;
          }
        }
        return true;
      });
      setProductsList(prod);
    }
  }

  function updateCart(id, flag) {
    const tempArr = [...counterArray];
    for (let i = 0; i < counterArray.length; i++) {
      if (id === tempArr[i].id) {
        const product = arrInit.find((e) => e.id === id);
        if (flag) {
          tempArr[i].count++;
          setPriceT(priceT + product.price);
        } else if (tempArr[i].count > 1) {
          tempArr[i].count--;
          setPriceT(Math.max(priceT - product.price, 0));
        }
        setCounterArray(tempArr);
        return;
      }
    }
  }

  return (
    <BrowserRouter>
      {isFatch ? (
        <Loading />
      ) : (
        <div className="app">
          <ProductContext.Provider
            value={{
              count,
              setBadge,
              cart,
              filter,
              arrInit,
              search,
              check,
              sort,
              setPriceT,
              priceT,
              setCart,
              deletePro,
              setCheck,
              counterArray,
              setCounterArray,
              updateCart,
              value,
              setValue,
              setArrInit,
              productsList,
              category,
            }}
          >
            <TopCard />

            <Routes>
              <Route path="/" element={<ProductList />}></Route>
              <Route path="/login" element={<Login />} />
              <Route path="signUp" element={<SignUp />} />
              <Route path="/product/:id" element={<ProductPage />}></Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />

              <Route
                path="*"
                element={
                  <>
                    <h2>
                      404
                      <p>page not found </p>
                    </h2>
                    <Link
                      to="/"
                      style={{ marginLeft: "40px", fontSize: "30px" }}
                    >
                      {" "}
                      back home
                    </Link>
                  </>
                }
              />
            </Routes>
          </ProductContext.Provider>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
