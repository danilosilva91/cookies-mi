//getElementById

const abacate = document.getElementById("inicio");
console.log(abacate);

//getElementsByClassName

const banana = document.getElementsByClassName("prints-redes-sociais");
console.log(banana);

//getElementsByTagName

const cereja = document.getElementsByTagName("p");
console.log(cereja);

//getElementsByName

const damasco = document.getElementsByName("nome-completo");
console.log(damasco);

//querySelector -> seleciona o primeiro elemento que encontrar com o seletor CSS

const emma = document.querySelector(".contato-item");
console.log(emma);


//querySelectorAll -> seleciona todos os elementos que encontrarem com o seletor CSS

const figo = document.querySelectorAll(".contato-item");
console.log(figo);

const element = document.querySelector("p");

console.log(element.textContent); //só html
console.log(element.innerText); //html e css
console.log(element.innerHTML); //traz tudo 

const button = document.querySelector("button");

button.style.backgroundColor = "purple";

const input = document.querySelector("input");

function cliqueiNoBotao() {
    paragrafo.textContent = (input.value);
}

function digiteiNoInput() {
    console.log(input.value);
}

const paragrafo = document.querySelector(".paragrafo");
