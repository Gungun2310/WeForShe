document.addEventListener('DOMContentLoaded', function() {
    const cart = [];

    document.querySelectorAll('.add-to-cart-button').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.closest('.products');
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.getAttribute('data-name');
            const productImage = productElement.getAttribute('data-image');

            const products = { id: productId, name: productName, image: productImage };
            cart.push(products);

            updateCartDisplay();
        });
    });

    function updateCartDisplay() {
        const cartElement = document.getElementById('cart');
        cartElement.innerHTML = '';

        cart.forEach(products => {
            const productElement = document.createElement('div');
            productElement.className = 'cart-item';
            productElement.innerHTML = `
                <p>${products.name}</p>
                <img src="${products.image}" alt="${products.name}" class="cart-image">
            `;
            cartElement.appendChild(productElement);
        });
    }
});