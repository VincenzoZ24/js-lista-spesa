const arrListaSpesa = [];

let eleText = document.querySelector(".text_list");
let eleForm = document.querySelector("form");
let listaSpesa = document.querySelector("lista_spesa");
// for (i = 0; i < arrListaSpesa.length; i++) {
//     listaSpesa.innerHTML += `<li>${arrListaSpesa[i]}</li>`

// }
let i=0;
while (i < arrListaSpesa.length) {
    listaSpesa.innerHTML += `<li>${arrListaSpesa[i]}</li>`
    i++;
};

eleForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if(eleText.value != ""){
        arrListaSpesa.push(eleText.value);
        document.querySelector(".lista_spesa").innerHTML += `<li>${eleText.value}</li>`;
        eleText.value = "";
    
    };
   
});