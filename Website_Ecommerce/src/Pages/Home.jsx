import React, { useEffect } from "react";
import Cards from "../Components/Cards";

const Home = () => {
  const [products, setProducts] = React.useState([]);

  const url = "https://dummyjson.com/products";

  function fetchProducts() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Cards</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Cards
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
