document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const cartItems = document.querySelectorAll(".cart-item");
    const totalPriceElement = document.getElementById("total-price");
  
    //  calculate the total price
    function updateTotalPrice() {
      let total = 0;
      cartItems.forEach(item => {
        const price = parseFloat(item.querySelector(".item-price").textContent.replace('$', ''));
        const quantity = parseInt(item.querySelector(".quantity").value);
        total += price * quantity;
      });
      totalPriceElement.textContent = total.toFixed(2);
    }
  
    // event listenerscart item
    cartItems.forEach(item => {
      const increaseButton = item.querySelector(".increase");
      const decreaseButton = item.querySelector(".decrease");
      const removeButton = item.querySelector(".remove");
      const likeButton = item.querySelector(".like");
      const quantityInput = item.querySelector(".quantity");
  
      // edhika quantity
      increaseButton.addEventListener("click", function () {
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateTotalPrice();
      });
  
      // edhika quantity
      decreaseButton.addEventListener("click", function () {
        if (parseInt(quantityInput.value) > 1) {
          quantityInput.value = parseInt(quantityInput.value) - 1;
          updateTotalPrice();
        }
      });
  
      // Remove item from cart
      removeButton.addEventListener("click", function () {
        item.remove();
        updateTotalPrice();
      });
  
      // Like/unlike item
      likeButton.addEventListener("click", function () {
        likeButton.classList.toggle("liked");
      });
    });
  
    // Initial total price calculation
    updateTotalPrice();
  });
  