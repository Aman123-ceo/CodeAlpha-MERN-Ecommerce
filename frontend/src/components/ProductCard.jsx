import axios from "axios";

function ProductCard({ product }) {

  const addToCart = async () => {

    try {

      await axios.post(
        "http://localhost:5000/api/cart",
        {
          user: "PASTE_USER_ID",
          product: product._id,
          quantity: 1,
        }
      );

      alert("Product added to cart");

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="border rounded-xl shadow-lg overflow-hidden bg-white">

      <img
        src={product.image}
        alt={product.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">

        <h2 className="text-2xl font-bold">
          {product.title}
        </h2>

        <p className="text-gray-600 mt-2">
          {product.description}
        </p>

        <p className="text-green-600 text-xl font-bold mt-3">
          ₹ {product.price}
        </p>

        <button
          onClick={addToCart}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4 w-full"
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;