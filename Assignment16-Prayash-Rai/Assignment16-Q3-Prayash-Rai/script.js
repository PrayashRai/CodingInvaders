let keyInput = document.querySelector("#key-input");
let btn = document.querySelector("button");

const productIDs = [10, 12, 15, 19, 24, 28, 30, 45, 50, 65, 77, 99];

btn.addEventListener("click", () => {
  let inpID = Number(keyInput.value);
  let output = searchProduct(productIDs, inpID);
  let result;
  if (output !== undefined) {
    result = `For the product id ${keyInput.value}. \n The position of the product is ${output}`;
  } else {
    result = `Out of stock`;
  }
  console.log(result);
  document.getElementById("msg").innerText = result;
});

let searchProduct = (arr, id) => {
  start = 0;
  end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === id) {
      return middle;
    } else if (arr[middle] < id) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
};
