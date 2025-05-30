let button = document.querySelector("#add"); // se eu usasse o getElementById não precissaria do # no add


button.addEventListener("click",function(evt) { //quando dou um "click" ele vai executar a função
    evt.preventDefault();  // para a pagina não dar reload quando acontecer
    let campo = document.querySelector("input");
    let lista = document.querySelector("#lista");
    let item = document.createElement("li");  // criou um li
    item.innerHTML = "<span class='texto'>" +
     campo.value + 
     "</span> <span class='remover'>Remover</span> <span class='editar'> edit </span> ";
    lista.appendChild(item); //incerriu o item
    console.log(item);
    console.log("foi")
    

});