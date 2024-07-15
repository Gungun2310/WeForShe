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

    // Initialize with specific like counts
    likeCountElements.forEach((element, index) => {
        const productId = element.getAttribute('data-product-id');
        
        if (index === 0) {
            likeCounts[productId] = 0;  // Set the like count of the first product to 0
        } else {
            likeCounts[productId] = Math.floor(Math.random() * 100) + 1;  // Random like count for other products
        }
        
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




