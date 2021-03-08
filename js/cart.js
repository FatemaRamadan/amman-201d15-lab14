/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cart = new Cart(cartItems);
    console.log(cartItems);
    if (localStorage) {
        let itemsFromForm = JSON.parse(localStorage.cart);
        for (let i = 0; i < cart.itemsCount; i++) {
            new cart(itemsFromForm[i].name)
            cart.addItem[i];
        }
    }
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
    loadCart();
    clearCart();
    showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
    // TODO: Find the table body
    let tableBody = document.getElementById('cart')
    let tableRow = document.createElement('tr')
    tableBody.appendChild(tableRow);
    // TODO: Iterate over the items in the cart
    let td = document.createElement('td')
    tableRow.appendChild(td);
    td.textContent = cart.itemsCount;

    // TODO: Iterate over the items in the cart


}
// TODO: Create a TR
// TODO: Create a TD for the delete link, quantity,  and the item
// TODO: Add the TR to the TBODY and each of the TD's to the TR



function removeItemFromCart(event) {

    let linkDe = event.target;
    td
    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    // TODO: Save the cart back to local storage
    // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();