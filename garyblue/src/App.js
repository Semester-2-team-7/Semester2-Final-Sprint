import "./App.css";

import { Routes, Route } from "react-router-dom";
import NavBar from "./componet/navbar";
import React from "react";
import Home from "./componet/Main/home";
import Menu from "./componet/Menu/menu";
import OrderMenu from "./componet/OrderMenu/order";
import Cart from "./componet/OrderMenu/cart";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/order" element={<OrderMenu />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
      ;
    </React.Fragment>
  );
}

export default App;
