// script.js

document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    let totalPrice = 0;
  
    // Add to cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-item');
        const itemPrice = parseFloat(button.getAttribute('data-price'));
  
        cart.push({ name: itemName, price: itemPrice });
        updateCart();
      });
    });
  
    // Update cart display
    function updateCart() {
      cartItemsContainer.innerHTML = '';
      cart.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(itemElement);
      });
  
      totalPrice = cart.reduce((total, item) => total + item.price, 0);
      totalPriceContainer.innerHTML = `<p>Total Price: $${totalPrice.toFixed(2)}</p>`;
    }
  
    // Place order
    document.getElementById('place-order').addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Your cart is empty!');
      } else {
        alert(`Thank you for your order! Total price: $${totalPrice.toFixed(2)}`);
        cart.length = 0;
        updateCart();
      }
    });
  });
  
  