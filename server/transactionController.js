// server/controllers/transactionController.js
const Transaction = require('./Transaction');

const transactionController = {
    getAllTransactions: async (req, res) => {
        try {
            const transactions = await Transaction.find();
            res.json(transactions);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    addTransaction: async (req, res) => {
        try {
            const { description, amount } = req.body;
            const newTransaction = new Transaction({ description, amount });
            await newTransaction.save();
            res.json({ message: 'Transaction added successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

module.exports = transactionController;
