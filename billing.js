// script.js

document.getElementById('invoice-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const clientName = document.getElementById('client-name').value;
    const invoiceDate = document.getElementById('invoice-date').value;
    const dueDate = document.getElementById('due-date').value;
    const amount = document.getElementById('amount').value;

    const invoiceList = document.getElementById('invoice-table-body');
    const newInvoiceRow = document.createElement('tr');

    newInvoiceRow.innerHTML = `
        <td>${clientName}</td>
        <td>${invoiceDate}</td>
        <td>${dueDate}</td>
        <td>$${parseFloat(amount).toFixed(2)}</td>
        <td>Unpaid</td>
        <td><button class="send-reminder">Send Reminder</button></td>
    `;

    invoiceList.appendChild(newInvoiceRow);

    // Clear form
    document.getElementById('invoice-form').reset();
});

// Event delegation for sending reminders
document.getElementById('invoice-table-body').addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('send-reminder')) {
        alert('Reminder sent to client!');
    }
});
