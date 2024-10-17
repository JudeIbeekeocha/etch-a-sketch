const container = document.querySelector(".container");

for (let i = 0; i < 100 * 100; i++) {
  const divs = document.createElement("div");
  divs.setAttribute("class", "child-container");
  container.appendChild(divs);
}

const childContainer = document.querySelectorAll('.child-container')

childContainer.forEach(child =>{
    child.addEventListener('mouseover', () =>{
        child.setAttribute('style', 'background-color: black')

        setTimeout(() =>{
        child.setAttribute('style', 'background-color: white')
            
        }, 1000)
    })
})