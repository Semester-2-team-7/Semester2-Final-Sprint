import React, { useState, useEffect } from "react";
import OrderPickUp from "./orderPickUp";
import Card from "../UI/card";
import Categories from "../services/Categories";

const OrderMenu = () => {
  return (
    <React.Fragment>
      <Card>
        <OrderPickUp />
      </Card>
      <Categories />
    </React.Fragment>
  );
};

export default OrderMenu;
