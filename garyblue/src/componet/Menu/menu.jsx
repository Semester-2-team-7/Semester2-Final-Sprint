import React, { useEffect, useState } from "react";

const Menu = () => {
  const [dspMenu, setDspMenu] = useState([]);
  // const [MealType, setMealType] = useState([

  //   {
  //     category: "c1",
  //     name: "food item 1",
  //     price: "12.99",
  //     description: "So good it'll make you wanna slap your mama",
  //   },
  //   {
  //     category: "c2",
  //     name: "food item 2",
  //     price: "8.99",
  //     description: "A little taaste of heaven",
  //   },
  //   {
  //     category: "c3",
  //     name: "food item 3",
  //     price: "16.99",
  //     description: "This just taste so good, pick me!",
  //   },
  //   {
  //     category: "c4",
  //     name: "food item 4",
  //     price: "9.99",
  //     description: "Not for the small stomach type, what a feed",
  //   },
  // ]);

  const mealTypes = [
    {
      category: "c1",
      name: "food item 1",
      price: "12.99",
      description: "So good it'll make you wanna slap your mama",
    },
    {
      category: "c2",
      name: "food item 2",
      price: "8.99",
      description: "A little taaste of heaven",
    },
    {
      category: "c3",
      name: "food item 3",
      price: "16.99",
      description: "This just taste so good, pick me!",
    },
    {
      category: "c4",
      name: "food item 4",
      price: "9.99",
      description: "Not for the small stomach type, what a feed",
    },
  ];

  const options = dspMenu.map((data) => {
    return <option value={data.name}>{data.name}</option>;
  });

  function handleClick(e) {
    console.log("handle click started");
    const cat = e.target.value;
    console.log(cat);
    const newList = [];
    mealTypes.map((data) => {
      if (data.category === cat) {
        newList.push(data);
      }
    });
    setDspMenu(newList);
  }

  const [dspList, setDspList] = useState([]);

  const dspOption = dspList.map((data) => {
    return (
      <div>
        {" "}
        <span>{data.name}</span> <span>{data.descriptions}</span>{" "}
        <img src="" alt="food Pic" />{" "}
      </div>
    );
  });

  function dspSelect(e) {
    console.log("dspSelect init");
    const name = e.target.value;
    const list = [];
    const result = dspMenu.map((data) => {
      if (data.name === name) {
        list.push(data);
      }
    });
    setDspList(list);
  }

    const [mealtype, setMealType] = useState([
      { category: "c1", name: "food item 1" },
      {},
      {},
    ]);
    return (
      <div>
        <h1 style={{ marginTop: "2rem" }}>
          <span>
            <img
              src="https://images.unsplash.com/photo-1511421616335-5a9846f1afcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
              alt="Server Pic"
              width="400rem"
              height="132rem"
              class="shadow me-5"
              style={{
                borderRadius: "1rem",
              }}
            />
          </span>
          Our Menu
          <span>
            <img
              src="https://images.unsplash.com/photo-1529808785564-5ea5054b2d68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt="Menu Pic"
              width="400rem"
              height="132rem"
              class="shadow ms-5"
              style={{
                borderRadius: "1rem",
              }}
            />
          </span>
        </h1>
        <section class="bg-info w-75 p-3 h-25 m-auto">
          <button
            type="button"
            class="btn btn-primary btn-lg me-5"
            value="c1"
            onClick={handleClick}
          >
            Breakfeast
          </button>
          <button
            type="button"
            class="btn btn-primary btn-lg me-5"
            value="c2"
            onClick={handleClick}
          >
            Lunch
          </button>
          <button
            type="button"
            class="btn btn-primary btn-lg me-5"
            value="c3"
            onClick={handleClick}
          >
            Dinner
          </button>
          <button
            type="button"
            class="btn btn-primary btn-lg me-5"
            value="c4"
            onClick={handleClick}
          >
            Dessert
          </button>
          <button
            type="button"
            class="btn btn-primary btn-lg me-5"
            value="c5"
            onClick={handleClick}
          >
            Specials
          </button>
          <button
            type="button"
            class="btn btn-primary btn-lg"
            value="c6"
            onClick={handleClick}
          >
            Beverages
          </button>
        </section>
        <div>
          <section>
            <select
              id="select"
              class="form-select"
              aria-label="Default select example"
              onChange={dspSelect}
            >
              <option selected>select an item</option>
              {options}
            </select>
          </section>
          <div>{dspOption}</div>
        </div>
      </div>
    );
  };

export default Menu;
