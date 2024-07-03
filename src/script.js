let totalValue = 0;
function ShowImg(imageNumber) {
  const mainImage = document.querySelector(".mainImage");
  const altImages = document.querySelectorAll(".altImages");

  mainImage.style.opacity = 0;
  altImages.forEach((img) => {
    img.style.opacity = 0;
  });

  if (imageNumber === 0) {
    mainImage.style.opacity = 1;
  } else if (imageNumber > 0 && imageNumber <= altImages.length) {
    altImages[imageNumber - 1].style.opacity = 1;
  }
}

function AddProduct() {
  const select = document.getElementById("productTable");
  const selectedOption = select.options[select.selectedIndex];
  const Name = selectedOption.getAttribute("product-name");
  const Value = parseFloat(selectedOption.value);

  if (Value > 0) {
    const productDiv = document.createElement("p");
    productDiv.textContent = `${Name} - R$${Value.toFixed(2)}`;
    document.getElementById("productsCount").appendChild(productDiv);

    totalValue += Value;
    console.log(totalValue);
    document.getElementById(
      "totalValue"
    ).textContent = `Total: R$${totalValue.toFixed(2)}`;
  }
}
