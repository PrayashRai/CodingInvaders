let keyInput = document.querySelector("#key-input");
let btn = document.querySelector("button");
let keyIds = [110, 107, 105, 100, 103, 102, 108, 104, 106, 109, 101];

btn.addEventListener("click", () => {
  let output = findPosition();
  let result;
  if (output !== undefined) {
    result = `For the room number ${keyInput.value}. \nThe position of the key is ${output}.`;
  } else {
    result = `Room Number does not exist`;
  }
  console.log(result);
  document.getElementById("msg").innerText = result;
});

function findPosition() {
  let inpID = Number(keyInput.value);
  for (let i = 0; i < keyIds.length; i++) {
    if (inpID === keyIds[i]) {
      return i;
    }
  }
}
