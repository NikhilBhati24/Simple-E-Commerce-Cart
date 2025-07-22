document.addEventListener('DOMContentLoaded', () => {
  const products = [
    {
      name: 'Fresh Apples',
      price: 2.99,
      image: './images/apple.jpg',
    },
    {
      name: 'Bananas',
      price: 1.49,
      image: './images/banana.jpg',
    },
    {
      name: 'Carrots',
      price: 1.99,
      image: './images/carrot.jpg',
    },
    {
      name: 'Tomatoes',
      price: 2.49,
      image: './images/tomato.jpg',
    },
    {
      name: 'Mango',
      price: 2.00,
      image: './images/mango.jpg',
    },
     {
      name: 'Orange',
      price: 1.68,
      image: './images/orange.jpg',
    },
     {
      name: 'Pineapple',
      price: 1.50,
      image: './images/pineapple.jpg',
    },
    {
      name: 'Watermelon',
      price: 1.50,
      image: './images/watermelon.jpg',
    }
  ];

  const productList = document.querySelector('.product-list');
  const cartItems = document.querySelector('.cart-items');
  const emptyCartMessage = document.getElementById('empty-cart');
  const cartTotalSection = document.getElementById('cart-total');
  const totalPriceElement = document.getElementById('total-price');

  let cart = [];

  function renderProducts() {
    products.forEach((product, index) => {
      const card = document.createElement('div');
      card.classList.add('product-card');

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button data-index="${index}">Add to Cart</button>
      `;

      productList.appendChild(card);
    });
  }

  function updateCart() {
    cartItems.innerHTML = '';

    if (cart.length === 0) {
      emptyCartMessage.style.display = 'block';
      cartTotalSection.classList.add('hidden');
      return;
    }

    emptyCartMessage.style.display = 'none';
    cartTotalSection.classList.remove('hidden');

    let total = 0;

    cart.forEach((item, index) => {
      const div = document.createElement('div');
      div.classList.add('cart-item');
      div.innerHTML = `
        <span>${item.name} - $${item.price.toFixed(2)}</span>
        <button data-remove="${index}" style="background: none; color: red; border: none; cursor: pointer;">Remove</button>
      `;

      cartItems.appendChild(div);
      total += item.price;
    });

    totalPriceElement.textContent = `$${total.toFixed(2)}`;
  }

  // Add product to cart
  productList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const index = e.target.getAttribute('data-index');
      cart.push(products[index]);
      updateCart();
    }
  });

  // Remove product from cart
  cartItems.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-remove')) {
      const index = e.target.getAttribute('data-remove');
      cart.splice(index, 1);
      updateCart();
    }
  });

  // Checkout button
  document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
  });

  renderProducts();
  updateCart();
});
