// public/scripts/script.js
document.addEventListener('DOMContentLoaded', function () {
    const transactionForm = document.getElementById('transactionForm');
    const transactionList = document.getElementById('transactionList');

    // Event listener for the transaction form
    transactionForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const description = document.getElementById('description').value;
        const amount = document.getElementById('amount').value;

        // Validate input (add more validation as needed)
        if (!description || !amount) {
            alert('Please enter both description and amount.');
            return;
        }

        // Send a POST request to add a new transaction
        fetch('/api/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ description, amount }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Clear form fields
            document.getElementById('description').value = '';
            document.getElementById('amount').value = '';

            // Fetch and display updated transaction list
            fetchTransactions();
        })
        .catch(error => console.error('Error:', error));
    });

    // Fetch and display initial transaction list
    fetchTransactions();

    // Function to fetch and display transactions
    function fetchTransactions() {
        // Send a GET request to fetch all transactions
        fetch('/api/transactions')
        .then(response => response.json())
        .then(transactions => {
            // Clear previous transactions
            transactionList.innerHTML = '';

            // Display transactions
            transactions.forEach(transaction => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<span>${transaction.description}</span> - ${transaction.amount}`;
                transactionList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error:', error));
    }
});
