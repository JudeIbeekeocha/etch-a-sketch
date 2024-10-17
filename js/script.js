const container = document.querySelector(".container");

const button = document.createElement("button");
button.textContent = "Click me";
container.appendChild(button);

button.onclick = () => {
  squarePerSide = Number(prompt("How many squares per side? "));


  for (let i = 0; i < squarePerSide * squarePerSide; i++) {
    const divs = document.createElement("div");
    divs.classList.add('child-container')
    // divs.setAttribute("class", "child-container");

    const height = 100 / squarePerSide
    const width = 100 / squarePerSide
    divs.style.height = `${height}%` 
    divs.style.width = `${width}%` 
    divs.style.backgroundColor = 'white'
    container.appendChild(divs);

  }

  const childContainer = document.querySelectorAll(".child-container");

  childContainer.forEach((child) => {
    child.addEventListener("mouseover", () => {
    //   child.setAttribute("style", "background-color: black");
      child.style.backgroundColor = 'black'

      setTimeout(() => {
        child.style.backgroundColor = 'white'
      }, 1000);
    });
  });
};
