// Get DOM elements
const addToCartBtn = document.getElementById('add-to-cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const ramSelector = document.getElementById('ram-selector');
const colorSelector = document.getElementById('color-selector');
const cartItem = document.getElementById('cart-item');

// Event listener for adding product to cart
addToCartBtn.addEventListener('click', function() {
    const selectedRam = ramSelector.value;
    const selectedColor = colorSelector.value;

    // Set selected options in the cart modal
    cartItem.textContent = `Irodai Laptop - RAM: ${selectedRam}, Szín: ${selectedColor}`;

    // Show the cart modal
    cartModal.style.display = 'flex';
});

// Event listener for closing the cart modal
closeModalBtn.addEventListener('click', function() {
    cartModal.style.display = 'none';
});
