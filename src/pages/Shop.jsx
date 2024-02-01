import React from "react";
import ProductsGrid from "../components/ProductsList/ProductsGrid";
import Products from "../components/Products";

import { useSelector } from "react-redux";
import { store } from "../store/store";

const Shop = () => {
  const categories = useSelector((store) => store.categories);

  return (
    <>
      <h1> {categories} </h1>
      <Products />
    </>
  );
};

export default Shop;
