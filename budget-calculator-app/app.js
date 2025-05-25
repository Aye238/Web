const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/BudgetApp");

const budgetRoutes = require("./routes/budgetRoutes");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", budgetRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
