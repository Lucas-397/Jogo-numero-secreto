const elementoChute = document.querySelector('#chute');

window.SpeechRecognition = window.SpeechRecongnition || 
webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

let valorChute = recognition.addEventListener('result', onSpeak);

function onSpeak (e){
    chute = e.results[0][0].transcript;
    exibirChute(chute)
    validaChute(chute);

}

function exibirChute(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
     `

}

recognition.addEventListener('end', () => recognition.start())