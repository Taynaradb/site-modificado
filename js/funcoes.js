function TrocarImagem(imagemNova){
 //document.quertSelector(".starbucks").src = imagemNova;
let copo = document.querySelector(".starbucks");
copo.src = imagemNova;
}

function MudarCirculo(corNova){
    let circulo = document.querySelector(".circulo");
    circulo.style.background = corNova;
}

function SpanCor (corSpan){
    let span = document.querySelector("h2 span");
    span.style.color = corSpan;
}

function ACor (corA){
    
    let a = document.querySelector(".caixa-texto a");
    a.style.background = corA;
}


