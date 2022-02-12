
function updateProduct(product, price, isIncreasing) {
  const productInput = document.getElementById(product + '-number');
  let productNumber = productInput.value;
  if (isIncreasing == true) {
    productNumber = parseInt(productNumber) + 1;
  }
  else if (productNumber > 0) {
    productNumber = parseFloat(productNumber) - 1;
  }
  productInput.value = productNumber;

  // update case total
  const productTotal = document.getElementById(product + '-total');
  productTotal.innerText = productNumber * price;
}

// phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
  updateProduct('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
  updateProduct('phone', 1219, false);
})



// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
  updateProduct('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
  updateProduct('case', 59, false);
});