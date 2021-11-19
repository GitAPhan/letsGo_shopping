

var items_in_cart = JSON.parse(Cookies.get('cart'));

// for (var i = items_in_cart.length; i > 0; i = i - 1) {
//     var j = i - 1;
//     eval('var item_' + j +' = items_in_cart[' + j +'];');
// }

var cart_container = document.getElementById('cart');

for (i = 0; i < items_in_cart.length; i++) {
    var item_container = document.createElement('div');
    item_container.classList.add('food');

    var shell_container = document.createElement('div');
    shell_container.classList.add('shell');

    var image_src = document.createElement('img');
    image_src.src = items_in_cart[i].selected_item.Image;

    var mask_container = document.createElement('div');
    mask_container.classList.add('mask');

    var item_name = document.createElement('h3');
    item_name.innerText = items_in_cart[i].selected_item.Name;

    var item_description = document.createElement('p');
    item_description.innerText = items_in_cart[i].selected_item.Description;
    item_description.classList.add('ingredients');

    var item_price = document.createElement('h2');
    item_price.innerText = items_in_cart[i].selected_item.Price;


    mask_container.appendChild(item_name);
    mask_container.appendChild(item_description);
    mask_container.appendChild(item_price);
    shell_container.appendChild(image_src);
    shell_container.appendChild(mask_container);
    item_container.appendChild(shell_container);
    cart_container.appendChild(item_container);

}
console.log(this);
