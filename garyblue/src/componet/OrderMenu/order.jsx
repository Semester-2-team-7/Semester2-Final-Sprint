import React from "react";
import OrderPickUp from "./orderPickUp";
import Card from "../UI/card";
// import Categories from "../services/Categories";
import Meals from "./Meals/meals";
import MenuCard from "../UI/menuCard";

const OrderMenu = () => {
  return (
    <React.Fragment>
      <Card>
        <OrderPickUp />
      </Card>

      <MenuCard>
        <Meals />
      </MenuCard>
    </React.Fragment>
  );
};

export default OrderMenu;
