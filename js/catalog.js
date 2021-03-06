/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);
let counter = 0;
// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

    //TODO: Add an <option> tag inside the form's select for each product
    const selectElement = document.getElementById('items');
    for (let i = 0; i < Product.allProducts.length; i++) {
        let optinons = document.createElement('option');
        selectElement.appendChild(optinons);
        optinons.textContent = Product.allProducts[i].name;
        //console.log(optinons);
    }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
    // TODO: Prevent the page from reloading
    event.preventDefault();
    // Do all the things ...
    addSelectedItemToCart();
    cart.saveToLocalStorage();
    updateCounter();
    updateCartPreview();

}


// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
    // TODO: suss out the item picked from the select list
    let guessed = document.getElementById('items').value;
    // TODO: get the quantity
    let quantityPicked = document.getElementById('quantity').value;
    // TODO: using those, add one item to the Cart
    cart.addItem(guessed, quantityPicked);
    console.log(cart);
}







// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
    let itemsCount = document.getElementById('itemCount');
    let quantityFromForm = parseInt(document.getElementById('quantity').value);
    counter = counter + quantityFromForm;
    itemsCount.textContent = counter;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
    // TODO: Get the item and quantity from the form
    let itemName = document.getElementById('items').value;
    let quantityPicked = document.getElementById('quantity').value;
    localStorage.setItem("cartItem", JSON.stringify(cart[0]));
    console.log(localStorage);

    // TODO: Add a new element to the cartContents div with that information
    let addedItems = document.getElementById('cartContents');
    let newAddedItem = document.createElement('p')
    addedItems.appendChild(newAddedItem);
    newAddedItem.textContent = itemName + quantityPicked;
}


// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();