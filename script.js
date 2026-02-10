function orderWhatsApp(productName) {
  const waNumber = '60123456789'; // Ganti nombor Elmad Parfum
  const message = `Hai Elmad Parfum, saya nak order produk: ${productName}`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');
}

function generateProducts() {
  fetch('products.json')
    .then(res => res.json())
    .then(products => {
      const menContainer = document.getElementById("men-grid");
      const womenContainer = document.getElementById("women-grid");

      menContainer.innerHTML = "";
      womenContainer.innerHTML = "";

      products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <span>RM${product.price}</span>
          <button class="buy-btn" onclick="orderWhatsApp('${product.name}')">Buy Now</button>
        `;
        if(product.category === "Men") menContainer.appendChild(card);
        else if(product.category === "Women") womenContainer.appendChild(card);
      });
    });
}

window.onload = generateProducts;
