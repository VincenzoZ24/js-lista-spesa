const arrListaSpesa = [];

let eleText = document.querySelector(".text_list");
let eleForm = document.querySelector("form");
let listaSpesa = document.querySelector("lista_spesa");
for (i = 0; i < arrListaSpesa.length; i++) {
    listaSpesa.innerHTML += `<li>${arrListaSpesa[i]}</li>`

}

eleForm.addEventListener('submit', function (event) {
    event.preventDefault();
    arrListaSpesa.push(eleText.value);

})