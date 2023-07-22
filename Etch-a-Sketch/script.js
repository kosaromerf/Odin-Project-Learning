function setBoxes(size) {
  let container = document.querySelector("#container");

  container.innerHTML = "";
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size ** 2; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);

    const whiteButton = document.getElementById("white");
    const blackButton = document.getElementById("black");
    const rainbowButton = document.getElementById("rainbow");
    const shadeButton = document.getElementById("shade");

    whiteButton.addEventListener("click", () => {
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "white";
      });
    });

    blackButton.addEventListener("click", () => {
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";
      });
    });

    function randomizeColor() {
      let num = Math.floor(Math.random() * 255);
      return num;
    }

    rainbowButton.addEventListener("click", () => {
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = `rgb(${randomizeColor()},${randomizeColor()},${randomizeColor()})`;
      });
    });

    let numPercent = 100;

    function shadeColor() {
      numPercent -= 10;
      return numPercent;
    }
    shadeButton.addEventListener("click", () => {
      box.addEventListener("mouseover", () => {
        let newColor = shadeColor();
        box.style.backgroundColor = `rgb(${newColor}%,${newColor}%,${newColor}%)`;
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const submit = document.querySelector(".submit");
  const input = document.querySelector("#input");

  setBoxes(16);

  submit.addEventListener("click", () => {
    const size = parseInt(input.value);
    if (size <= 100 && size > 0) {
      setBoxes(size);
    } else if (size > 1) {
      alert("You need to submit number lover than 101");
    } else {
      alert("You need to submit a positive interger");
    }
  });
});
