function validaChute(chute) {
    const numero = +chute

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numero > maiorValor || numero < menorValor) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2 class= "mensagem-final">Você acertou!</h2>
            <h3 class="mensagem-final">O número secreto era ${numeroSecreto}</h3>
            <button id = "jogar-novamente" class="BTjogarNovamente">jogar novamente</button>
        `
        acertou = true;

    } else{
        if (numero > numeroSecreto) {
            elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
            `
        } else {
            elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
            `
        }
    } 
}

function rodarPagina() {
    var intervalo = setInterval(function() {
        if (acertou) {
            clearInterval(intervalo);
        }
    }, 1000)
}

document.body.addEventListener('click', (e) =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})