const productController = {};
const Product = require("../models/Product");

//Create Product
productController.createProduct = async (req, res) => {
  const { name, price, img, category } = req.body;
  try {
    const product = await Product.create({
      name,
      price,
      img,
      category,
    });
    res.json({ status: true, product });
  } catch (error) {
    console.log(error);
    res.json({ status: false, error });
  }
};

//Delete Product

productController.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.productId);
    if (!product) {
      res.json({ status: false, message: "Product not found" });
    }
    res.json({ status: true, message: "Product succesfully deleted" });
  } catch (error) {}
};

//Update Product
productController.updateProduct = async (req, res) => {
  const { name, price, img } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.productId,
      { name, price, img },
      { new: true }
    );
    if (!product) {
      res.json({ status: false, message: "There is no product" });
    }
    res.json({ status: true, product });
  } catch (error) {
    console.log(error);
  }
};

//Get Products
productController.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      res.json({ status: false, message: "No products found" });
    }
    res.json({ status: true, products });
  } catch (error) {
    res.json({ status: false, error });
  }
};

//Get Products by category
productController.getByCategory = async (req, res) => {
  const { category } = req.body;
  try {
    const products = await Product.find({ category });
    if (!products) {
      res.json({ status: false, message: "No products found" });
    }
    res.json({ status: true, products });
  } catch (error) {
    res.json({ status: false, error });
  }
};

module.exports = productController;
