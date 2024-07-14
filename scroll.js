document.querySelectorAll('[id^=show-list-button]').forEach(button => {
    button.addEventListener('click', function() {
        const itemList = document.getElementById(button.id.replace('show-list-button', 'item-list'));
        itemList.classList.toggle('hidden');
    });
});

//adding product to local storage
document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    document.querySelectorAll('.add-to-cart-button').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.closest('.products');
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.getAttribute('data-name');
            const productImage = productElement.getAttribute('data-image');

            const products = { id: productId, name: productName, image: productImage };
            cart.push(products);

            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${productName} added to cart!`);
        });
    });
});



document.addEventListener('DOMContentLoaded', (event) => {
    const likeCounts = {};
    const likedProducts = {};

    const rateButtons = document.querySelectorAll('.rate-button');
    const likeCountElements = document.querySelectorAll('.like-count');

    // Initialize with random like counts
    likeCountElements.forEach(element => {
        const productId = element.getAttribute('data-product-id');
        likeCounts[productId] = Math.floor(Math.random() * 100) + 1;
        likedProducts[productId] = false;
        element.textContent = likeCounts[productId];
    });

    rateButtons.forEach(button => {
        const productId = button.getAttribute('data-product-id');

        button.addEventListener('click', () => {
            const heartIcon = button.querySelector('.fa-heart');

            if (likedProducts[productId]) {
                likeCounts[productId]--;
                heartIcon.classList.remove('filled');
                likedProducts[productId] = false;
            } else {
                likeCounts[productId]++;
                heartIcon.classList.add('filled');
                likedProducts[productId] = true;
            }

            document.querySelector(`.like-count[data-product-id="${productId}"]`).textContent = likeCounts[productId];
        });
    });
});

// Example of adding an item to the cart
const item = {
    name: 'Product Name',
    image: 'product-image-url',
    price: 19.99 // Ensure price is a number
};
cart.push(item);
localStorage.setItem('cart', JSON.stringify(cart));
