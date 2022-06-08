// const { get } = require("browser-sync");

$(document).ready(function () {

    const formulario = document.getElementById("form-prova");
    const inputFormulario = formulario.querySelectorAll("input");

    function loop() {
        console.log('Chamou loop');
        for (let index = 0; index < inputFormulario.length; index++) {
        inputFormulario[index].addEventListener("input", (() => {
            console.log(inputFormulario[index]);
            var input = event.target;
            console.log(event.target.value);
            

            // Selecting the input element and get its value 
            var inputVal = input.nextElementSibling;
            inputVal.innerHTML =  "Valor: " + input.value;
        }))

}

    }

    const carregarForm = document.getElementById("carregar-form");
    carregarForm.addEventListener("click", (( event ) => 
    {
        console.log("Carregou");
        var inputNome = document.getElementById("nome");
        inputNome.value = localStorage.getItem("nome");

        console.log(inputNome);

        var inputEmail = document.getElementById("mail");
        inputEmail.value = localStorage.getItem("mail");

        var inputTele = document.getElementById("telefone");
        inputTele.value = localStorage.getItem("telefone");
        
        var inputAssunto = document.getElementById("assunto");
        inputAssunto.value = localStorage.getItem("assunto");
        
        var inputMensagem = document.getElementById("mensagem");
        inputMensagem.value =localStorage.getItem("mensagem");
    }));


    const submitForm = document.getElementById("enviar-form");
    submitForm.addEventListener("click", ((event)=> {
        // event.preventDefault();
        console.log("salvou dados");
        var inputNome = document.getElementById("nome");
        console.log(inputNome.value);
        localStorage.setItem("nome", inputNome.value);

        var inputEmail = document.getElementById("mail");
        localStorage.setItem("mail", inputEmail.value);

        var inputTele = document.getElementById("telefone");
        localStorage.setItem("telefone", inputTele.value);
        
        var inputAssunto = document.getElementById("assunto");
        localStorage.setItem("assunto", inputAssunto.value);
        
        var inputMensagem = document.getElementById("mensagem");
        localStorage.setItem("mensagem", inputMensagem.value);

    }));

    loop();//Chamar Loop para adicionar evento




    
});

