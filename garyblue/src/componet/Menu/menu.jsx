import React, { useEffect, useState } from "react";

const Menu = () => {
  const [dspMenu, setDspMenu] = useState([]);
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-f1a28-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          category: responseData[key].category,
          description: responseData[key].description,
          image: responseData[key].image,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  // const mealTypes = [
  //   {
  //     category: "c1",
  //     name: "food item 1",
  //     price: "12.99",
  //     description: "So good it'll make you wanna slap your mama",
  //     image:
  //       "https://images.unsplash.com/photo-1623259838743-9f1e884fba59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1646&q=80",
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
  // ];
  const [dspList, setDspList] = useState([]);
  const [title, setTitle] = useState("");

  const options = dspMenu.map((data) => {
    return (
      <option key={data.id} value={data.name}>
        {data.name}
      </option>
    );
  });

  function handleClick(e) {
    const cat = e.target.value;
    setTitle(e.target.innerText);
    const newList = [];
    console.log(meals);
    meals.map((data) => {
      if (data.category === cat) {
        newList.push(data);
      }
    });
    setDspMenu(newList);
  }

  const [catSelect, setCatSelect] = useState();

  useEffect(() => {
    setCatSelect(`<-- Explore our ${title} options`);
  });

  const [optionImage, setOptionImage] = useState(
    "https://images.unsplash.com/photo-1557499305-bd68d0ad468d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1562&q=80"
  );
  const [optionTitle, setOptionTitle] = useState("Menu Category");
  const [optionName, setOptionName] = useState("Menu Item");
  const [optionPrice, setOptionPrice] = useState("0.00");
  const [optionDesc, setOptionDesc] = useState("Explore our menu");

  function dspSelect(e) {
    console.log("dspSelect init");
    const name = e.target.value;
    const list = [];
    dspMenu.map((data) => {
      if (data.name === name) {
        list.push(data);
        setOptionImage(data.image);
        setOptionName(data.name);
        setOptionPrice(data.price);
        setOptionDesc(data.description);
        setOptionTitle(title);
      }
    });
    setDspList(list);
  }

  return (
    <div>
      <h1 className="menuHeader d-inline-block" style={{ marginTop: ".5rem" }}>
        <img
          src="https://images.unsplash.com/photo-1511421616335-5a9846f1afcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
          alt="Server Pic"
          width="300vw"
          height="132vh"
          className="shadow m-2 headingImage"
        />
        <span className="menuHeading">Our Menu</span>
        <img
          src="https://images.unsplash.com/photo-1529808785564-5ea5054b2d68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt="Menu Pic"
          width="300vm"
          height="132vm"
          className="shadow m-2 headingImage"
        />
      </h1>
      <section
        className="p-3 m-auto"
        style={{
          width: "fit-content",
          backgroundColor: "#0077B6",
          borderRadius: "1rem",
          border: "12px solid #CAF0F8",
        }}
      >
        <button
          type="button"
          className="btn btn-primary m-2 menuBtn"
          value="c1"
          onClick={handleClick}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1617979417434-d80fbd960c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=60')",
          }}
        >
          {" "}
          <span className="badge pe-none menuBadge">Breakfeast</span>
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg m-2 menuBtn"
          value="c2"
          onClick={handleClick}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1591224227048-731eaf217394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80')",
          }}
        >
          <span className="badge pe-none menuBadge">Lunch</span>
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg m-2 menuBtn"
          value="c3"
          onClick={handleClick}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1626082922482-ac8aa1f5c3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80')",
          }}
        >
          <span className="badge pe-none menuBadge">Dinner</span>
        </button>
        <span style={{}}></span>
        <button
          type="button"
          className="btn btn-primary btn-lg m-2 menuBtn"
          value="c4"
          onClick={handleClick}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80')",
          }}
        >
          <span className="badge pe-none menuBadge">Dessert</span>
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg m-2 menuBtn"
          value="c5"
          onClick={handleClick}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80')",
          }}
        >
          <span className="badge pe-none menuBadge">Specials</span>
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg m-2 menuBtn"
          value="c6"
          onClick={handleClick}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80')",
          }}
        >
          <span className="badge pe-none menuBadge">Beverages</span>
        </button>
      </section>
      <div>
        <section className="d-inline-block">
          <select
            className="ms-5 mt-3 menuSelect"
            onChange={dspSelect}
            style={{ width: "20rem", alignSelf: "left" }}
          >
            <option defaultChecked>select an item</option>

            {options}
          </select>
          <span className="ms-2 mt-3 menuSelPrompt">{catSelect}</span>
        </section>
        <div>
          {/* {dspOption} */}
          <div style={{ display: "flex" }}>
            {" "}
            <div className="col" style={{ width: "40%" }}>
              <ul style={{ listStyle: "none" }}>
                <li
                  style={{
                    fontSize: "3rem",
                    color: "#0077B6",
                    fontWeight: "600",
                  }}
                >
                  {optionTitle}
                </li>

                <li style={{ fontSize: "2rem" }}>{optionName}</li>

                <li
                  style={{
                    fontSize: "2rem",
                    fontStyle: "italic",
                    fontWeight: "300",
                  }}
                >
                  Price: ${optionPrice}
                </li>
                <li>{optionDesc}</li>
              </ul>
            </div>
            <div className="col">
              <img src={optionImage} alt="food Pic" className="menuOptImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;