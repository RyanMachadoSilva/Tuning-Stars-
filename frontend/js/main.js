function renderProductsByCategory(category, containerId) {
  const container = document.getElementById(containerId);
  const filtered = products.filter(p => p.category === category);

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "part-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="200">
      <h3>${product.name}</h3>
      <p>Preço: R$${product.price}</p>
      <a href="product.html?id=${product.id}">Ver detalhes</a>
    `;
    container.appendChild(card);
  });
}

// Renderizar todas as categorias
renderProductsByCategory("Suspensão", "suspensao-container");
renderProductsByCategory("Freios", "freios-container");
renderProductsByCategory("Iluminação", "iluminacao-container");
renderProductsByCategory("Performance", "performance-products");

