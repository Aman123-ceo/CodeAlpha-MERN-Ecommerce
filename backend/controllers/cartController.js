const Cart = require("../models/Cart");


// ADD TO CART
const addToCart = async (req, res) => {
  try {
    const cartItem = await Cart.create(req.body);

    res.status(201).json(cartItem);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET CART ITEMS
const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find()
      .populate("user")
      .populate("product");

    res.status(200).json(cartItems);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// REMOVE CART ITEM
const removeCartItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Item removed from cart",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addToCart,
  getCartItems,
  removeCartItem,
};