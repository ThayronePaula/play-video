let video = document.getElementById("video1");
let container = document.getElementsByClassName("container");
let controle = document.getElementsByClassName("controle")[0];
let botao = document.getElementsByClassName("btn");
let informacao = document.getElementById("information");


frases = ["Voltar 15 segundos", "Adiantar 15 segundos","Iniciar",
"Voltar ao inicio"," Aumentar a velocidade","Diminuir a velociade"]





for(let i = 0; i < botao.length ;i++){
botao[i].addEventListener("mouseover",function(){
    informacao.innerHTML = "<h3>"+"Clique para <br> "+frases[i]+"</h3>";
})
}

for (let i = 0; i < botao.length; i++) {
    botao[i].addEventListener("mouseout",function(){
        informacao.innerHTML = "<h3>Passe o mouse por cima dos botões</h3>";
})   
}



controle.style.display = "block";

container[0].addEventListener("mouseover",function(){
    controle.style.display = "block"
})
container[0].addEventListener("mouseout",function(){
    controle.style.display = "none"
})












function voltar_15(){
    video.currentTime -= 15;
}


function proximo_15(){
    video.currentTime +=15;
}


function play(){
    video.play();   
}


function stop(){
    video.pause();
    video.currentTime = 0;
}

function aum_vel(){
    video.playbackRate += 0.1;
}


function dim_vel(){
    video.playbackRate -= 0.1;
}