const express = require("express");
const router = express.Router();
const controller = require("../controllers/budgetController");

router.get("/", controller.showAll);
router.get("/add", controller.showAddForm);
router.post("/add", controller.addItem);
router.post("/delete", controller.deleteItem);
router.get("/edit", controller.showEditForm);
router.post("/update", controller.updateItem);

module.exports = router;
