window.addEventListener('DOMContentLoaded', () => {
    let openShopping = document.querySelector('.shopping');
    let closeShopping = document.querySelector('.closeShopping');
    let body = document.querySelector('body');
    let total = document.querySelector('.total');
    let quantitySpan = document.getElementById('quantity');
    let count = this.document.querySelectorAll('.count');
    const submitOrderBtn = document.getElementById('submitOrderBtn');
    let quantity = 0;
    let totalPrice = 0;
    let orders = [];
    // let cart1 = document.getElementById('cart-1');
    // let cart2 = document.getElementById('cart-2');
    // let cart3 = document.getElementById('cart-3');
    // let cart4 = document.getElementById('cart-4');
    // let cart5 = document.getElementById('cart-5');
    // let cart6 = document.getElementById('cart-6');

    openShopping.addEventListener('click', ()=>{
        body.classList.add('active');
    })
    closeShopping.addEventListener('click', ()=>{
        body.classList.remove('active');
    })
    count.forEach((button, i ,) =>{
        button.addEventListener('click', ()=>{
            const food = button.getAttribute('data-food');
            const price = parseFloat(button.getAttribute('data-price'));
            quantity++;
            totalPrice += price;
            quantitySpan.textContent = quantity
            total.textContent = totalPrice.toFixed(2);
            orders.push({food, price})
            localStorage.setItem('orders', JSON.stringify(orders))
        })
    });
    // count.addEventListener('click',  function() {
    //     cart1.style.display = 'block';
    // });
    // count.addEventListener('click', () => {
    //     cart2.style.display = 'block';
    // });
    // count.addEventListener('click', () => {
    //     cart3.style.display = 'block';
    // });
    // count.addEventListener('click', () => {
    //     cart4.style.display = 'block';
    // });
    // count.addEventListener('click', () => {
    //     cart5.style.display = 'block';
    // });
    // count.addEventListener('click', () => {
    //     cart6.style.display = 'block';
    // });
    const storedOrders = JSON.parse(localStorage.getItem('orders'));
    if (storedOrders) {
        orders = storedOrders;
        quantity = orders.length;
        totalPrice = orders.reduce((sum, order) => sum + order.price, 0);

        quantitySpan.textContent = quantity;
        total.textContent = totalPrice.toFixed(2);
    }
    submitOrderBtn.addEventListener('click', () => {
        alert('Order submitted successfully!');
    });
}) 