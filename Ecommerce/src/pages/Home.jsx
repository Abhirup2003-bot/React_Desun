import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [apiData, setApiData] = useState([]);

  const URL = "https://dummyjson.com/products";

  async function fetchData() {
    const data = await fetch(URL);
    const response = await data.json();
    setApiData(response.products);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-4">
        {apiData &&
          apiData.map((item, index) => (
            <Card
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.thumbnail}
              key={index}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
