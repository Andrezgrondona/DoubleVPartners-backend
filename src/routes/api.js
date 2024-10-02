const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.put("/products/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).send("Producto no encontrado");
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).send("Error al actualizar el producto");
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).send("Producto no encontrado");
    }
    res.send("Producto eliminado correctamente");
  } catch (error) {
    res.status(500).send("Error al eliminar el producto");
  }
});

router.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.status(201).json(newProduct);
});

router.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

module.exports = router;
