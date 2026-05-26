const Order = require("../models/Order");
const Cart = require("../models/Cart");


// PLACE ORDER
const placeOrder = async (req, res) => {
  try {
    const { user, products, totalAmount } = req.body;

    const order = await Order.create({
      user,
      products,
      totalAmount,
    });

    // Clear user's cart
    await Cart.deleteMany({ user });

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET ALL ORDERS
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user")
      .populate("products.product");

    res.status(200).json(orders);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  placeOrder,
  getOrders,
};