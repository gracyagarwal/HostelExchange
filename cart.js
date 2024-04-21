// Function to add item to the cart
function addToCart(productId) {
    // Retrieve existing cart items from localStorage
    var existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    // Check if the product already exists in the cart
    var existingItemIndex = existingCartItems.findIndex(item => item.productId === productId);
    if (existingItemIndex !== -1) {
        // If the product already exists in the cart, increase its quantity
        existingCartItems[existingItemIndex].quantity++;
    } else {
        // Otherwise, add it as a new item with quantity set to 1
        var productDetails = getProductDetails(productId);
        var cartItem = {
            ...productDetails,
            productId: productId,
            quantity: 1
        };
        existingCartItems.push(cartItem);
    }
    // Store the updated cart items in localStorage
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
    alert('Item added to cart!');
}



// Function to retrieve product details based on ID
function getProductDetails(productId) {
    var products = {
        1: {
            name: "Havells Electric Kettle",
            price: "₹1000",
            image: "img/products/f1-kettle.jpg",
            description: "Condition: Great. Auto shut off function. Integrated stainless steel function. 360° Cordless Kettle. 304 stainless steel interior with no plastic. Energy saving, cool touch outer body with no scalding hazard. Wide mouth for ease filling, pouring and cleaning.",
            seller: "Gracy Agarwal"
        },
        2: {
            name: "Extension Board",
            price: "₹250",
            image: "img/products/f2-extension.png",
            description: "Condition: Good. 4 socket extension cord."
            ,seller: "Arshia Shirish"
        },
        3: {
            name: "Engineering Mechanics Textbook",
            price: "₹300",
            image: "img/products/f3-mech.jpg",
            description: "Textbook in great condition with all pages intact."
            ,seller: "Mitali Paul"
        },
        
    };

    console.log('Product ID:', productId);
    console.log('Product Details:', products[productId]);
    return products[productId];
}
