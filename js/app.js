{

    function item_selection(e) {
        console.log('an item has been selected');
        let image_src = e.childNodes[1].childNodes[1].src;
        let item_name = e.childNodes[1].childNodes[3].childNodes[1].innerText;
        let item_description = e.childNodes[1].childNodes[3].childNodes[3].innerText;
        let item_price = e.childNodes[1].childNodes[3].childNodes[5].innerText;
        let new_string = item_name + item_description;

        let selected_item = {
            Name: item_name,
            Description: item_description,
            Price: item_price,
            Image: image_src,
        }

        let old_cart_cookie_JSON = Cookies.get('cart');

        if (old_cart_cookie_JSON == undefined) {
            let new_cookie = [{ selected_item }];
            Cookies.set('cart', JSON.stringify(new_cookie));
        } else {
            let old_cart_cookie = JSON.parse(old_cart_cookie_JSON);
            console.log(old_cart_cookie);
            let i = old_cart_cookie.length;
            old_cart_cookie[i] = {selected_item};
            Cookies.set('cart', JSON.stringify(old_cart_cookie));            
        }


        // let cartCookie = {
        //     [`item_${i}`]: selected_item,
        // }


        // console.log(old_cart_cookie);

        // cartCookie_JSON = JSON.stringify(cartCookie);
        // console.log(cartCookie_JSON);

        // old_cart_cookie.window['item_' + i] = selected_item;
        // console.log('this');

        // let new_test_cookie = JSON.parse(old_cart_cookie);
        // console.log('this');


    }

    // Cookies.set('cart', 'cart');

    console.log('yays');

}