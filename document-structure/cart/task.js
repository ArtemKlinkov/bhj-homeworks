const quantityControl = Array.from(document.getElementsByClassName("product__quantity-control"));
quantityControl.forEach(element => element.addEventListener("click", quantityChange));

function quantityChange(event) {

    const quantity = this.closest(".product__quantity-controls").querySelector(".product__quantity-value");

    if (this.classList.contains("product__quantity-control_dec")) {
        quantity.innerText = +quantity.innerText - 1;
        if (+quantity.innerText <= 0) {
            quantity.innerText = 1;
        }
    } else {
        quantity.innerText = +quantity.innerText + 1;
    }
}

const addToCartButtons = Array.from(document.getElementsByClassName("product__add"));
addToCartButtons.forEach(element => element.addEventListener("click", addToCart));
const cart = document.querySelector(".cart__products");
function addToCart(event) {
    const product = this.closest(".product");

    const cartItems = Array.from(cart.getElementsByClassName("cart__product"));

    const filteredCart = cartItems.filter(element => element.dataset.id === product.dataset.id);

    if (filteredCart.length) {
        filteredCart[0].querySelector(".cart__product-count").innerText = +filteredCart[0].querySelector(".cart__product-count").innerText + +product.querySelector(".product__quantity-value").innerText;
    } else {
        const newCartItem = document.createElement("div");
        newCartItem.classList.add("cart__product");
        newCartItem.dataset.id = product.dataset.id;
    
        newCartItem.innerHTML = `<img class="cart__product-image" src="${product.querySelector(".product__image").src}">
                                 <div class="cart__product-count">${product.querySelector(".product__quantity-value").innerText}</div>`;    
    
        cart.appendChild(newCartItem); 
    }                             
}