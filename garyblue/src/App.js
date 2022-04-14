import "./App.css";
import AuthContext from "./context/auth-context";
import { Routes, Route } from "react-router-dom";
import NavBar from "./componet/UI/navbar";
import React, { useContext } from "react";
import Home from "./componet/Main/home";
import Menu from "./componet/Menu/menu";
import OrderMenu from "./componet/OrderMenu/order";
import Cart from "./componet/OrderMenu/cart";

import AuthPage from "./componet/Auth/AuthPage";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <React.Fragment>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          {authCtx.isLoggedIn && (
            <Route path="/order" element={<OrderMenu />}></Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/cart" element={<Cart />}></Route>
          )}
          {!authCtx.isLoggedIn && (
            <Route path="/auth" element={<AuthPage />}></Route>
          )}
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
