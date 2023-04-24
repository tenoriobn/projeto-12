import passwordValidator from "./2-passwordValidator.js";
import emailValidator from "./3-emailValidator.js";

const requiredField = document.querySelectorAll("[required]");

requiredField.forEach((field) => {
    field.addEventListener("blur", () => checkField(field));
})

function checkField(field) {
    if (field.name === "emailField") {
        const isValid = emailValidator(field.value);
        
        if(isValid) {
            console.log("email válido")
        } else {
            console.log("email inválido")
        }
    }

    if (field.name === "passwordField") {
        const isValid = passwordValidator(field.value);
        console.log(isValid);
    }
}



/*
Os usuários devem ser capazes de:
    - Ver os estados de foco para todos os elementos interativos na página***
    - Receber uma mensagem de erro quando o `formulário` for enviado se:
        + Qualquer campo `input` estiver vazio. A mensagem para este erro deve dizer *"[Nome do campo] não pode estar vazio"*
        + O endereço de e-mail não estiver no formato correto (ou seja, um endereço de e-mail correto deve ter esta estrutura: 
            +`name@host.tld`). A mensagem para este erro deve dizer *"Parece que este não é um e-mail"*
*/