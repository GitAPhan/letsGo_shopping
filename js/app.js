{
    // function to select item
    function item_selection(e) {

        console.log('an item has been selected');

        // dives into the selected items childNodes and grabs important info
        let image_src = e.childNodes[1].childNodes[1].src;
        let item_name = e.childNodes[1].childNodes[3].childNodes[1].innerText;
        let item_description = e.childNodes[1].childNodes[3].childNodes[3].innerText;
        let item_price = e.childNodes[1].childNodes[3].childNodes[5].innerText;

        //    sets the item to display none *pretty useless since a refresh would bring them back*
        e.style.display = "none";

        // created obect to represent item selected 
        let selected_item = {
            Name: item_name,
            Description: item_description,
            Price: item_price,
            Image: image_src,
        }

        // grabbed the cookie
        let old_cart_cookie_JSON = Cookies.get('cart');

        // conditional statement to decide if a new cookie can be set
        // or if there is already an existing item in the cart
        if (old_cart_cookie_JSON == undefined) {

            // converted selected item to JSON and set to cookie
            let new_cookie = [{ selected_item }];
            Cookies.set('cart', JSON.stringify(new_cookie));
        } else {

            // converted cookie back to object
            let old_cart_cookie = JSON.parse(old_cart_cookie_JSON);
            console.log(old_cart_cookie);

            // using the variable length assign next position in array
            let i = old_cart_cookie.length;
            old_cart_cookie[i] = { selected_item };

            //  rebaked the cookie
            Cookies.set('cart', JSON.stringify(old_cart_cookie));
        }
    }
    // yays
    console.log('yays');

}