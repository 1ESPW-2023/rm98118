"use strict"

// // Objetos
// const usuario1 = {
//     nomeUsuario: "pt001",
//     senhaUsuario: "12345"
// }

// const usuario2 = {
//     nomeUsuario: "pt002",
//     senhaUsuario: "12345"
// }

// // Criando uma lista de objetos
// let listaDeUsuarios = [];
// listaDeUsuarios.push(usuario1);
// listaDeUsuarios.push(usuario2);

// adicionando a lista de objetos no localStorage

// Criando
// Criar uma lista de objetos

//CRIANDO OBJETOS
//CRIAR UMA LISTA DE OBJETOS
let listaDeUsuarios = [
    {
        nomeCompleto : "José da Silva",
        nomeUsuario : "jose",
        senhaUsuario: "123456"
    }
    ,
    {
        nomeCompleto : "Paulo da Silva",
        nomeUsuario : "paulo",
        senhaUsuario: "123456"
    }
    ,
    {
        nomeCompleto : "Maria da Silva",
        nomeUsuario : "maria",
        senhaUsuario: "123456"
    }
    ,
    {
        nomeCompleto : "João da Silva",
        nomeUsuario : "joao",
        senhaUsuario: "123456"
    }
];

//Adicionando a lista de OBJETOS no localStorage
localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));

addEventListener("click", (evt)=>{
    if(evt.target.id == "btnSubmit"){

        //Entrada do usuário
        let usuarioValidado = {
        usuarioInput: document.querySelector("#usuario").value,
        senhaInput: document.querySelector("#senha").value
    }
        const msgError = document.querySelector("#msgError");

        try{

            let listaUser = JSON.parse(localStorage.getItem("listaUser"));

            listaUser.forEach((usuario)=>{

                if(usuarioValidado.usuarioInput == usuario.nomeUsuario && usuarioValidado.senhaInput == usuario.senhaUsuario){
                    usuarioValidado["nomeCompleto"] = usuario.nomeCompleto;
                    throw "USUÁRIO VALIDADO!";
                }
            });

            throw "SENHA OU NOME DE USUÁRIO INVÁLIDO!";
        }catch(msg){

            if(msg == "USUÁRIO VALIDADO!"){
                //Usuário validado no localStorage 
                localStorage.setItem("usuario-validado", JSON.stringify(usuarioValidado))


                msgError.setAttribute("style","color:#00ff00;display:block;")
                msgError.innerHTML = "<strong>Usuário validado!</strong>"

                //criando o sistema de redirect
                setTimeout( function (){
                    window.location.href= '../home.html';
                }, 3000);
                   


            }else{
                msgError.setAttribute("style","color:#ff0000;display:block;");
                msgError.innerHTML = "<strong>Senha ou nome de Usuário inválidos!</strong>";
            }
        }
           


    }
});