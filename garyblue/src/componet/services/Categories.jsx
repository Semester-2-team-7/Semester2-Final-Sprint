import { useEffect, useState } from "react";

const Categories = (props) => {
  const [categories, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(
        "https://react-http-f1a28-default-rtdb.firebaseio.com/category.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();

      const loadedCategories = [];

      for (const key in responseData) {
        loadedCategories.push({
          id: key,
          name: responseData[key].name,
        });
      }
      setCategory(loadedCategories);
      setIsLoading(false);
    };

    fetchCategory().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }
  const onItemSelect = (e) => {
    props.onSelectCategory(e);
    setSelectedCategory(e);
  };

  const categoryList = categories.map((category) => {
    return (
      <li
        onClick={() => onItemSelect(category.id)}
        className={
          category.id === selectedCategory
            ? "list-group-item active"
            : "list-group-item"
        }
        key={category.id}
      >
        {category.name}
      </li>
    );
  });

  return (
    <section className="d-flex   justify-content-center mb-3">
      <ul className="list-group flex-wrap list-group-horizontal clickable">
        {categoryList}
      </ul>
    </section>
  );
};

export default Categories;
