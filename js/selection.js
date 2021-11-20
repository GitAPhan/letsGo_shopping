// function to clear cart
function clear_cart() {
    Cookies.remove('cart');

    // sorry, I know you said avoid using this but I wasn't able to find a working solution for my use case
    location.reload(true);
}

// function to remove specific item from cart
function remove_cart_item(item) {
    // This is to find the position of the object in the array
    var item_position = Number(item.children[0].innerText);

    // converted cookie to object
    var cart_cookies = JSON.parse(Cookies.get('cart'));

    // conditional to remove cart cookie if only 1 item
    if (cart_cookies.length === 1) {
        Cookies.remove('cart');
    } else {

        // remove item at index 'item_position'
        var cart_cookies_remove = cart_cookies.splice(item_position, 1);

        // the cookie has been rebaked
        Cookies.set('cart', JSON.stringify(cart_cookies));
    }

    // sorry, I know you said avoid using this but I wasn't able to find a working solution for my use case
    location.reload(true);
    console.log('delete me!');
}

// parent container
var cart_container = document.getElementById('cart');


// conditional to only run if there are items in the cart
if (Cookies.get('cart') !== undefined) {
    // converted cookie to objects
    var items_in_cart = JSON.parse(Cookies.get('cart'));

    // loop to add items
    for (i = 0; i < items_in_cart.length; i++) {

        // created main containers
        var item_container = document.createElement('div');
        item_container.classList.add('food');
        item_container.setAttribute('onclick', 'remove_cart_item(this)');
        var shell_container = document.createElement('div');
        shell_container.classList.add('shell');

        // creates invisible ID tag
        var secret_tag = document.createElement('p');
        secret_tag.innerText = i;
        secret_tag.style.display = 'none';
        item_container.appendChild(secret_tag);
        // creates image
        var image_src = document.createElement('img');
        image_src.src = items_in_cart[i].selected_item.Image;
        // creates color mask
        var mask_container = document.createElement('div');
        mask_container.classList.add('mask');
        // creates item name h3 tag
        var item_name = document.createElement('h3');
        item_name.innerText = items_in_cart[i].selected_item.Name;
        // creates ingredients/description p tag
        var item_description = document.createElement('p');
        item_description.innerText = items_in_cart[i].selected_item.Description;
        item_description.classList.add('ingredients');
        // creates price h2 tag
        var item_price = document.createElement('h2');
        item_price.innerText = items_in_cart[i].selected_item.Price;

        // let the appending begin!
        mask_container.appendChild(item_name);
        mask_container.appendChild(item_description);
        mask_container.appendChild(item_price);
        shell_container.appendChild(image_src);
        shell_container.appendChild(mask_container);
        item_container.appendChild(shell_container);
        cart_container.appendChild(item_container);

    }
} else {
    // message
    cart_container.innerText = "you currently don't have any items selected!";
    cart_container.style.textAlign = 'center';
    cart_container.style.fontSize = '2em';
}

