document.getElementById('show-list-button').addEventListener('click', function() {
    const itemList = document.getElementById('item-list');
    if (itemList.classList.contains('hidden')) {
        itemList.classList.remove('hidden');
    } else {
        itemList.classList.add('hidden');
    }
});