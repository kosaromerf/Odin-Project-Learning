

  function setBoxes(size) {
    let container = document.querySelector("#container");
  
    container.innerHTML = "";
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  
    for (let i = 0; i < size ** 2; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      container.appendChild(box);
  
      box.addEventListener("mouseover", () => {
        box.classList.add("hovered");
        
      });




    }
  }
  
  function reset() {
    const reset = document.querySelector(".reset");
  
    reset.addEventListener("click", () => {
      const changedBoxes = document.querySelectorAll(".hovered");
      changedBoxes.forEach((box) => box.classList.remove("hovered"));
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const submit = document.querySelector(".submit");
    const input = document.querySelector("#input");
  
    setBoxes(16);
  
    submit.addEventListener("click", () => {
      const size = parseInt(input.value);
      setBoxes(size);
      
    });
  
    reset();
  });



  
  
  function changeStyle(){
    const blackButton =document.getElementById("black")
    const whiteButton =document.getElementById("white")
    const rainbowButton =document.getElementById("rainbow")
    const shadeButton =document.getElementById("shade")
    const hovered =document.querySelectorAll(".hovered")

    blackButton.addEventListener("click", () => {
        const blackStyleElement = document.createElement("style");
        const blackStyle =`
        .hovered{
            background-color: black
        }`

        blackStyleElement.innerHTML = blackStyle;

        document.head.appendChild(blackStyleElement);
    })
    
    whiteButton.addEventListener("click", () => {
        const whiteStyleElement = document.createElement("style");
        const whiteStyle =`
        .hovered{
            background-color: white
        }`

        whiteStyleElement.innerHTML = whiteStyle;

        document.head.appendChild(whiteStyleElement);
    })

        
    }



    changeStyle()









