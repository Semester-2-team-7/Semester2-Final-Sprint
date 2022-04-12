import React, { useState } from "react";
import axios from "axios";

export default function Home() {
  const items = axios
    .get("https://react-http-f1a28-default-rtdb.firebaseio.com/meals.json")
    .then((res) => {
      return res.json;
    });

  const [data, setData] = useState(items);
  console.log(data);
  return <div>home</div>;
}
