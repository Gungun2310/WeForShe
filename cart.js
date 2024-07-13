document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartElement = document.getElementById('cart');
    const buyButton = document.getElementById('buy-button');

    function updateCartDisplay() {
        cartElement.innerHTML = '';

        if (cart.length === 0) {
            cartElement.innerHTML = '<p>Your cart is empty.</p>';
            buyButton.style.display = 'none';
        } else {
            cart.forEach((products, index) => {
                const productElement = document.createElement('div');
                productElement.className = 'cart-item';
                productElement.innerHTML = `
                    <p>${products.name}</p>
                    <img src="${products.image}" alt="${products.name}" class="cart-image">
                    <button class="delete-button" data-index="${index}">Delete</button>
                `;
                cartElement.appendChild(productElement);
            });
            buyButton.style.display = 'block';
        }
    }

    cartElement.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-button')) {
            const index = event.target.getAttribute('data-index');
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        }
    });

    buyButton.addEventListener('click', function() {
        if (cart.length > 0) {
            alert('Purchase successful!');
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        } else {
            alert('Your cart is empty.');
        }
    });

    updateCartDisplay();
});
