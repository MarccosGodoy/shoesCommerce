const router = require("express").Router();
const {
  createProduct,
  deleteProduct,
  updateProduct,
  getProducts,
  getByCategory,
} = require("../controllers/productController");

//Rutas

//Save product
router.route("/save").post(createProduct);
//Update product
router.route("/update").put(updateProduct);

//Delete Product
router.route("/delete/:productId").delete(deleteProduct);

//Get products
router.route("/get").get(getProducts);

//Get products by category
router.route("/getByCategory").post(getByCategory);

module.exports = router;
