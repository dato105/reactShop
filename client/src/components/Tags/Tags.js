import "./Tags.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import * as React from "react";

function Tags() {
  const { arrInit, check, filter, sort, value } = useContext(ProductContext);
  const products = arrInit;

  function cat(products) {
    const categories = [];
    for (let i = 0; i < products.length; i++) {
      if (!categories.includes(products[i].category)) {
        categories.push(products[i].category);
      }
    }
    return categories;
  }

  const categories = cat(products);
  const tags = categories.map((item, index) => (
    <Link key={index} to="/">
      <button
        className="btn"
        id="navBtn"
        key={index}
        onClick={() => filter(item)}
      >
        {item}
      </button>
    </Link>
  ));

  return (
    <div className="btnGroup">
      <Link to="/">
        <button
          className="btn"
          id="navBtn"
          key={-1}
          onClick={() => filter("all")}
        >
          All
        </button>
      </Link>
      {tags}
      {check ? (
        <div className="sort">
          <div className="collection-sort">
            <label>
              <strong>Sort By:</strong>
            </label>
            <select
              value={value}
              onChange={(e) => {
                sort(e.target.value);
              }}
            >
              <option value="all"></option>
              <option value="Best Selling">Best Selling</option>
              <option value="Price, low to high">Price, low to high</option>
              <option value="Price, high to low">Price, high to low</option>
            </select>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Tags;
