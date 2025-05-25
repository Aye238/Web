const mongoose = require("mongoose");

const budgetSchema = mongoose.Schema({
    title: String,
    amount: Number,
    type: { type: String, enum: ["income", "expense"] },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Budget", budgetSchema);
