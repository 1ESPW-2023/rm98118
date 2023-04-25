// // Funções

// const divElement = document.getElementById("div-box")

// // divElement.addEventListener("click", ()=>{
// //     console.log(divElement);
// // });

// divElement.addEventListener("click", mostraElemento);

// function mostraElemento(){
//     console.log(divElement)
// }

// function soma(){
//     let n1 = 10
//     let n2 =20
//     console.log(n1+n2)
// }

let tmp = 0;


function mudaCor() {
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    
    const elemento = [...document.getElementsByClassName("conteudo")];
    elemento.forEach( (el)=>{
        el.elemento =  `conteudo(${conteudo}`;
    } )

   tmp = setTimeout(mudaCor, 1000);

}

function pararTimeOut() {
    clearTimeout(tmp);
}


function alteraBanner1() {

    // let nr = Math.ceil(Math.random() *3);
    const img1 = document.querySelector(".l-d > img");
    const img2 = document.querySelector(".l-e > img");
    img1.src = "./imagens/banner-lateral-1.png";
    img2.src = "./imagens/banner-lateral-2.png";
    setTimeout(alteraBanner2, 1000);
}

function alteraBanner2() {

    // let nr = Math.ceil(Math.random() *3);
    const img1 = document.querySelector(".l-d > img");
    const img2 = document.querySelector(".l-e > img");
    img1.src = "./imagens/banner-lateral-2.png";
    img2.src = "./imagens/banner-lateral-1.png";

    setTimeout(alteraBanner3, 1000);

}

function alteraBanner3() {

    // let nr = Math.ceil(Math.random() *3);
    const img1 = document.querySelector(".l-d > img");
    const img2 = document.querySelector(".l-e > img");
    img1.src = "./imagens/banner-lateral-1.png";
    img2.src = "./imagens/banner-lateral-2.png";

    setTimeout(alteraBanner1, 1000);

}

 
alteraBanner1();

function turnOff(){
    const imgLampada = document.querySelector(".conteudo img");
    const btnOnOff = document.querySelector(".conteudo button");

    if(btnOnOff.textContent = "LIGAR"){
        btnOnOff.textContent = "DESLIGAR"
        imgLampada.src= "./";
    }else{
        btnOnOff.textContent = "LIGAR";
        imgLampada.src="";
    }
}