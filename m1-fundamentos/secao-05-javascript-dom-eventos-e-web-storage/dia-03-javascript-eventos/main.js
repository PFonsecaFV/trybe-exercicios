const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// 1 - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function addClass(event) {
  const elementTech = document.querySelector(".tech");
  elementTech.classList.remove("tech");
  event.target.classList.add("tech");
  input.value = "";
}

firstLi.addEventListener("click", addClass);
secondLi.addEventListener("click", addClass);
thirdLi.addEventListener("click", addClass);
