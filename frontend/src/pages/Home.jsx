import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "../components/ProductCard";

function Home() {

  const [products, setProducts] = useState([]);

  // Fetch products from backend
  const fetchProducts = async () => {

    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-5xl font-bold mb-10 text-center">
        Ecommerce Store
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;