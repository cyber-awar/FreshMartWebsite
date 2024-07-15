document.addEventListener('DOMContentLoaded', (event) => {
    const searchBox = document.getElementById('searchBox');
    const productList = document.getElementById('productList');
    const items = productList.getElementsByTagName('li');

    searchBox.addEventListener('keyup', function() {
        const query = searchBox.value.toLowerCase();
        for (let item of items) {
            if (item.textContent.toLowerCase().includes(query)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        }
    });
});
