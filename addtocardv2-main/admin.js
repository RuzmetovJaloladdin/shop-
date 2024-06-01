document.addEventListener('DOMContentLoaded', () => {
    const orderSummaryDiv = document.getElementById('orderSummary');
    const clearOrdersBtn = document.getElementById('clearOrdersBtn');
    const storedOrders = JSON.parse(localStorage.getItem('orders'));

    function displayOrders(orders) {
        if (orders && orders.length > 0) {
            let totalItems = orders.length;
            let totalPrice = orders.reduce((sum, order) => sum + order.price, 0);

            let orderList = '<ul>';
            orders.forEach(order => {
                orderList += `<li>${order.food}: $${order.price.toFixed(2)}</li>`;
            });
            orderList += '</ul>';

            orderSummaryDiv.innerHTML = `
                <p>Total items: ${totalItems}</p>
                <p>Total price: $${totalPrice.toFixed(2)}</p>
                ${orderList}
            `;
        } else {
            orderSummaryDiv.innerHTML = '<p>No orders found.</p>';
        }
    }

    displayOrders(storedOrders);

    clearOrdersBtn.addEventListener('click', () => {
        localStorage.removeItem('orders');
        displayOrders([]);
    });
});
