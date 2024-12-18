const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Fetch all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add a product
router.post("/", async (req, res) => {
  const { name, description, price, stock } = req.body;
  const product = await Product.create({ name, description, price, stock });
  res.json({ message: "Product added", product });
});

module.exports = router;
