const maiorValor = parseInt(document.querySelector("#maior-valor").textContent);
const menorValor = parseInt(document.querySelector('#menor-valor').textContent);
const numeroSecreto = Math.round(Math.random()*maiorValor+1);

console.log(numeroSecreto)