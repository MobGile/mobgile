let prices = [3700, 5000, 6000];
let quantities = [1, 1, 1];

function changeQty(product, change) {
  quantities[product-1] = Math.max(1, quantities[product-1] + change);
  document.getElementById(`qty${product}`).textContent = quantities[product-1];
}

function buyNow(product) {
  let qty = quantities[product-1];
  let names = ["Gmail Fresh", "Gmail Trial YouTube", "Gmail Trial Gemini"];
  let total = prices[product-1] * qty;
  
  let message = `Halo, saya mau beli ${qty} pcs ${names[product-1]}\nTotal: Rp ${total.toLocaleString('id-ID')}`;
  window.location.href = `https://wa.me/628XXXXXXXXXX?text=${encodeURIComponent(message)}`;
}
