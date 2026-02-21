document.addEventListener('DOMContentLoaded',()=>{
  const products = [
    {id:1,name:"Product 1",price: 29.5},
    {id:2,name:"Product 2",price: 34.9},
    {id:3,name:"Product 3",price: 40.9},
  ]


  const cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  
})