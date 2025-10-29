let items = JSON.parse(localStorage.getItem('items')) || [];

const itemList = document.getElementById('item-list');
const addItemForm = document.getElementById('add-item-form');
const itemNameInput = document.getElementById('item-name');
const itemQuantityInput = document.getElementById('item-quantity');

function showItemsList() {
    itemList.innerHTML = '';
    
    items.forEach((item, index) => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `
            ${item.name} - Quantity: ${item.quantity}
            <button onclick="removeItem(${index})">Delete</button>
        `;
        itemList.appendChild(listItem);
    });
    
    localStorage.setItem('items', JSON.stringify(items));
}

function handleNewItem(e) {
    let item = {
        name: itemNameInput.value,
        quantity: parseInt(itemQuantityInput.value)
    };
    items.push(item);
    showItemsList();
    itemNameInput.value = '';
    itemQuantityInput.value = '';
}
function removeItem(index) {
    items.splice(index, 1);
    showItemsList();
}
addItemForm.addEventListener('submit', handleNewItem);
showItemsList();
itemQuantityInput.addEventListener('input', function () {
    if (parseInt(itemQuantityInput.value) <= 0) {
        itemQuantityInput.value = '';
        alert('Quantity must be greater than 0');
    }
});
// addItemForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const quantity = parseInt(itemQuantityInput.value);
//     if (isNaN(quantity) || quantity <= 0) {
//         alert('Quantity must be greater than 0');
//         return;
//     }
//     handleNewItem();
// });