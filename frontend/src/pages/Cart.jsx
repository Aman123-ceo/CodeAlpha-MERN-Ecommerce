import { useEffect, useState } from "react";
import axios from "axios";

function Cart() {

  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items
  const fetchCartItems = async () => {

    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/cart"
      );

      setCartItems(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cartItems.map((item) => (

        <div
          key={item._id}
          className="border p-4 mb-4 rounded"
        >

          <h2 className="text-2xl font-bold">
            {item.product.title}
          </h2>

          <p>
            Quantity: {item.quantity}
          </p>

          <p className="text-green-600 font-bold">
            ₹ {item.product.price}
          </p>

        </div>

      ))}

    </div>
  );
}

export default Cart;