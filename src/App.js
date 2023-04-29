import "./App.css";
import { useContext, useReducer, useState } from "react";
import { useEffect } from "react";
import Products from "./components/products/Products";
import AddProducts from "./components/add-product/Add-Product";
import { AddProductContext } from "./contexts/AddProductContext";
import TotalPriceProvider from "./contexts/TotalPriceContext";
function App() {
  const context = useContext(AddProductContext)
  return (
    <div className="App">
      <AddProducts></AddProducts>
      <TotalPriceProvider products={context.productItem.products}>
        <Products></Products>
      </TotalPriceProvider>
    </div>
  );
}

export default App;