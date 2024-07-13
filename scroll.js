
document.querySelectorAll('[id^=show-list-button]').forEach(button => {
    button.addEventListener('click', function() {
        const itemList = document.getElementById(button.id.replace('show-list-button', 'item-list'));
        itemList.classList.toggle('hidden');
    });
});
