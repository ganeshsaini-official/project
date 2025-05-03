  let cart = [];

  function addToCart(name, price) {
    cart.push({ name, price });
    updateCartDisplay();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
  }

  function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    const cartCounts = document.querySelectorAll('.cart-count');
    
    cartList.innerHTML = '';
    
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      
      li.innerHTML = `
        <span>${item.name} - ₹${item.price}</span>
        <button onclick="removeFromCart(${index})" class="btn btn-sm btn-danger">
          <i class="fas fa-trash-alt"></i>
        </button>
      `;
      
      cartList.appendChild(li);
    });

    cartCounts.forEach(count => {
      count.textContent = cart.length;
    });
  }
