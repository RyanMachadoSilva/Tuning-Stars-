// Pega o carrinho do localStorage ou cria vazio
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Adicionar produto ao carrinho
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} adicionado ao carrinho!`);
  renderCart();
}

// Remover produto do carrinho
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Renderizar carrinho na página cart.html
function renderCart() {
  const container = document.getElementById("cart-container");
  if (!container) return;

  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" width="80">
        <h4>${item.name}</h4>
        <p>R$${item.price}</p>
        <button onclick="removeFromCart(${index})">Remover</button>
      </div>
    `;
  });

  if(cart.length > 0) {
    container.innerHTML += `<hr><h3>Total: R$${total}</h3>`;
  } else {
    container.innerHTML = "<p>O carrinho está vazio.</p>";
  }
}

// Inicializa carrinho (em cart.html)
renderCart();
