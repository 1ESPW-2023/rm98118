// Recepcionar o objeto que logou no localStorage e imprimir uma de suas proporiedades

if(JSON.parse(localStorage.getItem("usuario-validado")) != null){
    const spanUser = document.querySelector('#user');
    let usuario = JSON.parse(localStorage.getItem('usuario-validado'));
    spanUser.innerHTML = usuario.nomeCompleto;

    const botaoLogout = document.querySelector('#btnLogout');
    botaoLogout.addEventListener('click', ()=>{
        localStorage.removeItem('usuario-validado');
        window.location.herf = "../login.html";
    });
}else{
    window.location.herf = "../login.html";
}
