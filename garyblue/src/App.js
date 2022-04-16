import "./App.css";
import AuthContext from "./context/auth-context";
import { Routes, Route } from "react-router-dom";
import NavBar from "./componet/UI/navbar";
import React, { useContext, useState } from "react";
import Home from "./componet/Main/home";
import Menu from "./componet/Menu/menu";
import OrderMenu from "./componet/OrderMenu/order";
import Cart from "./componet/OrderMenu/Cart/cart";
import AuthPage from "./componet/Auth/AuthPage";
import CartProvider from "./context/CartProvider";

function App() {
  const authCtx = useContext(AuthContext);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <NavBar onShowCart={showCartHandler} cartIsShown={cartIsShown} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          {authCtx.isLoggedIn && (
            <Route path="/order" element={<OrderMenu />}></Route>
          )}
          {authCtx.isLoggedIn & cartIsShown && (
            <Route
              path="/cart"
              element={<Cart onHideCart={hideCartHandler} />}
            ></Route>
          )}
          {!authCtx.isLoggedIn && (
            <Route path="/auth" element={<AuthPage />}></Route>
          )}
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
