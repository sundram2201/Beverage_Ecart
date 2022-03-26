import React from "react";
import Data from "./Data";
import Products from "./Products";
import Nav from "./Nav";
import { useState } from "react";

const Home = () => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <div className="container">
      <div className="col-md-4 justify-content-md-center">
        <input
          className="form-control mr-sm-2 srch"
          type="search"
          placeholder="Search Your favorite Beverage..."
          aria-label="Search"
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>

      {Data.filter((val) => {
        if (searchItem == "") {
          return val;
        } else if (
          val.name.toLowerCase().includes(searchItem.toLowerCase()) ||
          val.category.toLowerCase().includes(searchItem.toLowerCase())
        ) {
          return val;
        }
      }).map((item, index) => {
        return (
          <Products
            image={item.image}
            name={item.name}
            desc={item.desc}
            price={item.price}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default Home;
