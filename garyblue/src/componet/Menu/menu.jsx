import React, { useEffect, useState } from "react";

const Menu = () => {
  const [dspMenu, setDspMenu] = useState([]);

  const mealTypes = [
    {
      category: "c1",
      name: "food item 1",
      price: "12.99",
      description: "So good it'll make you wanna slap your mama",
      image: "",
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
  const [dspList, setDspList] = useState([]);
  const [title, setTitle] = useState();

  const options = dspMenu.map((data) => {
    return (
      <option key={data.id} value={data.name}>
        {data.name}
      </option>
    );
  });

  function handleClick(e) {
    console.log("handle click started");
    const cat = e.target.value;
    console.log(cat);
    setTitle(e.target.innerText);
    console.log(title);
    const newList = [];
    mealTypes.map((data) => {
      if (data.category === cat) {
        newList.push(data);
      }
    });
    setDspMenu(newList);
  }

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
    return (
      <div style={{ display: "flex" }}>
        {" "}
        <div style={{ width: "25%" }}>
          {/* <section>
            <select
              id="select"
              class="form-select m-5 border-dark"
              aria-label="Default select example"
              onChange={dspSelect}
              style={{ width: "20rem" }}
            >
              <option defaultChecked>select an item</option>
              {options}
            </select>
          </section> */}
          <ul style={{ listStyle: "none" }}>
            <li
              style={{ fontSize: "3rem", color: "#0077B6", fontWeight: "600" }}
            >
              {title}
            </li>

            <li style={{ fontSize: "2rem" }}>{data.name}</li>

            <li
              style={{
                fontSize: "2rem",
                fontStyle: "italic",
                fontWeight: "300",
              }}
            >
              {data.description}
            </li>
          </ul>
        </div>
        <div class="col" style={{ width: "50%" }}>
          <img
            src="https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=60"
            alt="food Pic"
            style={{
              borderRadius: "2rem",
              border: "6px solid #0077B6",
              width: "40rem",
            }}
          />
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1 style={{ marginTop: ".5rem" }}>
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
      <section
        class="p-3 m-auto"
        style={{
          width: "90%",
          backgroundColor: "#0077B6",
          borderRadius: "1rem",
          border: "12px solid #CAF0F8",
        }}
      >
        <button
          type="button"
          class="btn btn-primary me-3"
          value="c1"
          onClick={handleClick}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1617979417434-d80fbd960c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=60')",
            width: "12rem",
            height: "8rem",
            borderRadius: "1rem",
            border: "solid white 4px",
          }}
        >
          {" "}
          <span
            class="badge"
            style={{
              background: "#CAF0F8D9",
              color: "#03045E",
              fontSize: "1.2rem",
              borderRadius: "1rem",
            }}
          >
            Breakfeast
          </span>
        </button>
        <button
          type="button"
          class="btn btn-primary btn-lg me-3"
          value="c2"
          onClick={handleClick}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1591224227048-731eaf217394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80')",
            width: "12rem",
            height: "8rem",
            borderRadius: "1rem",
            border: "solid white 4px",
          }}
        >
          <span
            class="badge"
            style={{
              background: "#CAF0F8D9",
              color: "#03045E",
              fontSize: "1.2rem",
              borderRadius: "1rem",
            }}
          >
            Lunch
          </span>
        </button>
        <button
          type="button"
          class="btn btn-primary btn-lg me-3"
          value="c3"
          onClick={handleClick}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1626082922482-ac8aa1f5c3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80')",
            width: "12rem",
            height: "8rem",
            borderRadius: "1rem",
            border: "solid white 4px",
          }}
        >
          <span
            class="badge"
            style={{
              background: "#CAF0F8D9",
              color: "#03045E",
              fontSize: "1.2rem",
              borderRadius: "1rem",
            }}
          >
            Dinner
          </span>
        </button>
        <button
          type="button"
          class="btn btn-primary btn-lg me-3"
          value="c4"
          onClick={handleClick}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80')",
            width: "12rem",
            height: "8rem",
            borderRadius: "1rem",
            border: "solid white 4px",
          }}
        >
          <span
            class="badge"
            style={{
              background: "#CAF0F8D9",
              color: "#03045E",
              fontSize: "1.2rem",
              borderRadius: "1rem",
            }}
          >
            Dessert
          </span>
        </button>
        <button
          type="button"
          class="btn btn-primary btn-lg me-3"
          value="c5"
          onClick={handleClick}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80')",
            width: "12rem",
            height: "8rem",
            borderRadius: "1rem",
            border: "solid white 4px",
          }}
        >
          <span
            class="badge"
            style={{
              background: "#CAF0F8D9",
              color: "#03045E",
              fontSize: "1.2rem",
              borderRadius: "1rem",
            }}
          >
            Specials
          </span>
        </button>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          value="c6"
          onClick={handleClick}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80')",
            width: "12rem",
            height: "8rem",
            borderRadius: "1rem",
            border: "solid white 4px",
          }}
        >
          <span
            class="badge"
            style={{
              background: "#CAF0F8D9",
              color: "#03045E",
              fontSize: "1.2rem",
              borderRadius: "1rem",
            }}
          >
            Beverages
          </span>
        </button>
      </section>
      <div>
        <section>
          <select
            id="select"
            class="form-select m-5 border-dark"
            aria-label="Default select example"
            onChange={dspSelect}
            style={{ width: "20rem" }}
          >
            <option defaultChecked>select an item</option>
            {options}
          </select>
        </section>
        <div>{dspOption}</div>
      </div>
    </div>
  );

export default Menu;
