const Budget = require("../models/budgetModel");

exports.showAll = async (req, res) => {
    try {
        const typeFilter = req.query.type;

        let query = {};
        if (typeFilter === 'income' || typeFilter === 'expense') {
            query.type = typeFilter;
        }

        const items = await Budget.find(query);

        // Calculate total income and expense
        let totalIncome = 0;
        let totalExpense = 0;

        items.forEach(item => {
            if (item.type === 'income') {
                totalIncome += item.amount;
            } else if (item.type === 'expense') {
                totalExpense += item.amount;
            }
        });

        const balance = totalIncome - totalExpense;

        res.render("index", { items, totalIncome, totalExpense, balance, typeFilter });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};


exports.showAddForm = (req, res) => {
    res.render("add");
};

exports.addItem = async (req, res) => {
    await Budget.create({
        title: req.body.title,
        amount: req.body.amount,
        type: req.body.type
    });
    res.redirect("/");
};

exports.deleteItem = async (req, res) => {
    await Budget.findByIdAndDelete(req.body.id);
    res.redirect("/");
};

exports.showEditForm = async (req, res) => {
    const item = await Budget.findById(req.query.id);
    res.render("edit", { item });
};

exports.updateItem = async (req, res) => {
    await Budget.findByIdAndUpdate(req.body.id, {
        title: req.body.title,
        amount: req.body.amount,
        type: req.body.type
    });
    res.redirect("/");
};
