
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