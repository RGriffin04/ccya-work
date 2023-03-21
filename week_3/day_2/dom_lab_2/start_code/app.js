document.addEventListener('DOMContentLoaded', () => {
  console.log('app.js:', data);
  
  for(let product of data.products) {
    console.log(product.name);
  }

  const productsSection = document.querySelector('#products')
  const productsList = document.createElement('ul')
  productsSection.appendChild(productsList)
  const 
});
