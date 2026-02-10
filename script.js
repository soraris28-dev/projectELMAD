function scrollToSection(){
  document.getElementById("dashboard").scrollIntoView({behavior:"smooth"});
}
console.log("Elmad Parfum Loaded");

function orderWhatsApp(productName) {
  const waNumber = '60123456789'; // Ganti dengan nombor Elmad Parfum
  const message = `Hai Elmad Parfum, saya nak order produk: ${productName}`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');
}

function generateProducts() {
  fetch('products.json')
    .then(res => res.json())
    .then(products => {
      const container = document.getElementById("product-grid");
      container.innerHTML = "";
      products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.category}</p>
          <span>RM${product.price}</span>
          <button class="buy-btn" onclick="orderWhatsApp('${product.name}')">Buy Now</button>
        `;
        container.appendChild(card);
      });
    });
}

window.onload = generateProducts;
