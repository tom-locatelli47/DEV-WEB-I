let button = document.querySelector("#add"); // se eu usasse o getElementById não precissaria do # no add


button.addEventListener("click",function(evt) { //quando dou um "click" ele vai executar a função
    evt.preventDefault();  // para a pagina não dar reload quando acontecer
    let campo = document.querySelector("input"); // só existe um input, por isso não é um id
    let lista = document.querySelector("#lista");
    let item = document.createElement("li");  // criou um li
    item.innerHTML = "<span class='texto'>" +
     campo.value + 
     "</span> <span class='remover'>remover</span> <span class='editar'> edit </span> ";
    lista.appendChild(item); //incerriu o item
    console.log(item);
    console.log("foi");
});

let lista = document.querySelector("#lista")
lista.addEventListener("click",function(evt){ // onde clicou 
    console.log(evt);
    let elemento = evt.target; // onde clicou 
    console.log(elemento.className);

    if(elemento.className == 'remover'){
      //  elemento.remove(); assim remove só o elemento kkkk só o nome "Remover"
      elemento.parentElement.remove();
    }

    else if(elemento.className == 'editar'){
        elemento.parentElement.querySelector('.texto').contentEditable = true; // tornar possivel edição
        elemento.parentElement.querySelector('.texto').focus(); // redirecionu o foco para o botão editar

     }
});